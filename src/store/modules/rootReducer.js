/* para passar todos reducer
o redux tem que uma função chamada combineReducers
que nos pormite combinar todos reducer da aplicação assim passando pro store
*/

import {combineReducers} from 'redux';

import books from './books/reducer';

export default combineReducers({
  books
})