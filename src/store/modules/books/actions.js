/*
as actions são chamadas pelo usuário ao clicar em alguma função
é obrigatório passar o type pois é assim que reducer vai entender o que fazer
*/
export function addBookRequest(id) {
  return {
    type: 'ADD_BOOK_REQUEST',
    id
  }
}


export function addBookSuccess(trip) {
  return {
    type: 'ADD_BOOK_SUCCESS',
    trip
  }
}
export function removeBook(id) {
  return {
    type: 'REMOVE_BOOK',
    id,
  }
}

export function updateAmountBookRequest(id, amount) {
  return {
    type: 'UPDATE_BOOK_REQUEST',
    id,
    amount
  }
}

export function updateAmountBookSuccess(id, amount) {
  return {
    type: 'UPDATE_BOOK_SUCCESS',
    id,
    amount
  }
}

