/*
as actions são chamadas pelo usuário ao clicar em alguma função
é obrigatório passar o type pois é assim que reducer vai entender o que fazer
*/
export function addBook(trip) {
  return {
    type: 'ADD_BOOK',
    trip
  }
}

export function removeBook(id) {
  return {
    type: 'REMOVE_BOOK',
    id,
  }
}

export function updateAmountBook(id, amount) {
  return {
    type: 'UPDATE_BOOK',
    id,
    amount
  }
}