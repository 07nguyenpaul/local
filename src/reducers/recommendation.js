const initialStateRecommendation = {
  data: []
};

const recommendation = (state=initialStateRecommendation, action) => {
  switch (action.type) {
    case 'RECEIVE_NEW_REC':
      return {
        data: [...state, Object.assign({
          id: Date.now(),
          name: action.content.name,
          location: action.content.location,
          description: action.content.description
          })
        ]
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
    default:
      return state;
  }
};

export default recommendation;
