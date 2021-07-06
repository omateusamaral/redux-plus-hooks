export function addBook(trip) {
  return {
    type: 'ADD_BOOK',
    trip
  }
}

export function removeBook(id){
  return {
    type: 'REMOVE_BOOK',
    id,
  }
}