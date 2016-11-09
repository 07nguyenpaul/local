const initialStateRecommendation = {
  data: []
};

const recommendation = (state=initialStateRecommendation, action) => {
  switch (action.type) {
    case 'RECEIVE_NEW_REC':
      return {
        data: [...state.data, action.payload.obj]
      };
    case 'RECEIVE_ALL_REC':
      return {
        data: action.recommendationList
      };
    case 'DELETE_REC':
      return {
        ...state,
        data: action.deleteRec
      };
    case 'SET_SELECTED_RECOMMENDATION':
      return {
        // ...state,
        data: state.data,
        selectedRec: action.uid
      };
    default:
      return state;
  }
};

export default recommendation;
