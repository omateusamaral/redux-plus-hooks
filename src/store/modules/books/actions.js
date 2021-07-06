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