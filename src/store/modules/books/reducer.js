/* aqui no reducer que acontece a mágica

pegando o type vindo da action é possível fazer o que quiser

porém ele é imutável...

mas existe a biblioteca immer que nos permite manipula-la criando um "rascunho"

devolvendo resultado para página que o chamar
*/
import produce from 'immer';
export default function books(state = [], action) {
  switch (action.type) {
    case 'ADD_BOOK_SUCCESS':
      return produce(state, draft => {
        draft.push(action.trip);
      });
    case 'REMOVE_BOOK':
      return produce(state, draft => {
        const tripIndex = draft.findIndex(trip => trip.id === action.id);
        if (tripIndex >= 0) {
          draft.splice(tripIndex, 1);
        }

      });

    case 'UPDATE_BOOK': {
      if (action.amount <= 0) {
        return state;
      }
      return produce(state, draft => {
        const tripIndex = draft.findIndex(trip => trip.id === action.id);

        if (tripIndex >= 0) {
          draft[tripIndex].amount = Number(action.amount);
        }
      });
    }
    default:
      return state;
  }
}

