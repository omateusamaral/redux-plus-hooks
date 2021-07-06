import produce from 'immer';
export default function books(state = [], action) {
  switch (action.type) {
    case 'ADD_BOOK':
      return produce(state,draft =>{
        const tripIndex = draft.findIndex(id => id.id ===action.trip.id)
        if(tripIndex>=0){
          draft[tripIndex].amount +=1;
        }
        else{
          draft.push({
            ...action.trip,
            amount:1
          });
        }
      });

    default:
      return state;
  }
}

