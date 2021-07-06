import { all } from 'redux-saga/effects';

import bookSaga from './books/sagas';

export function* rootSaga() {
  return yield all([
    bookSaga
  ]);
}