/*
função generator é similar funções com async await

e é necessário fazer funções para requisição http nesse estilo
call = faz a chamada a api

put = dispara action

all = fica ouvindo 

takeLatest = só faz a ultima requisição feita pelo usuario
*/
import { select, call, put, all, takeLatest } from 'redux-saga/effects';
import { addBookSuccess, updateAmountBook } from './actions';
import api from '../../../services/api';

function* addToBook({ id }) {

  const tripExists = yield select(
    state => state.books.find(trip => trip.id === id)
  );

  if (tripExists) {
    const amount = tripExists.amount + 1;
    yield put(updateAmountBook(id,amount))
  }
  else {
    const response = yield call(api.get, `trips/${id}`);
    const data = {
      ...response.data,
      amount: 1
    }
    yield put(addBookSuccess(data));
  }


}

export default all([
  takeLatest('ADD_BOOK_REQUEST', addToBook)
])