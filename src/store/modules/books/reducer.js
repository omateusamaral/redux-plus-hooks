export default function books(state = [], action) {
  console.log(state);
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, action.trip];

    default:
      return state;
  }
}

