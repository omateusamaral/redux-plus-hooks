/*
função generator é similar funções com async await

e é necessário fazer funções para requisição http nesse estilo
call = faz a chamada a api

put = dispara action

all = fica ouvindo 

takeLatest = só faz a ultima requisição feita pelo usuario
*/
import { select, call, put, all, takeLatest } from 'redux-saga/effects';
import { addBookSuccess, updateAmountBookSuccess } from './actions';
import api from '../../../services/api';

function* addToBook({ id }) {

  const tripExists = yield select(
    state => state.books.find(trip => trip.id === id)
  );

  const myStock = yield call(api.get, `/stock/${id}`);

  const stockAmount = myStock.data.amount;

  const currentStock = tripExists ? tripExists.amount : 0;

  const amount = currentStock + 1;

  if (amount > stockAmount) {
    alert('Quantidade máxima atingida');
    return;
  }

  if (tripExists) {

    yield put(updateAmountBookSuccess(id, amount));

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

function* updateAmount({ id, amount }) {

  if (amount <= 0) return;
  const myStock = yield call(api.get, `stock/${id}`);

  const stockAmount = myStock.data.amount;

  if (amount > stockAmount) {
    alert('Quantidade máxima atingida');
    return;
  }

  yield put(updateAmountBookSuccess(id, amount));

}

export default all([
  takeLatest('ADD_BOOK_REQUEST', addToBook),
  takeLatest('UPDATE_BOOK_REQUEST', updateAmount),

])