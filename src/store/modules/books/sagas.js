/*
função generator é similar funções com async await

e é necessário fazer funções para requisição http nesse estilo
call = faz a chamada a api

put = dispara action

all = fica ouvindo 

takeLatest = só faz a ultima requisição feita pelo usuario
*/
import {call,put,all, takeLatest} from 'redux-saga/effects';
import {addBookSuccess} from './actions';
import api from '../../../services/api';

function* addToBook({id}){
  const response = yield call(api.get, `trips/${id}`);
  
  yield put(addBookSuccess(response.data));
}

export default all([
  takeLatest('ADD_BOOK_REQUEST',addToBook)
])