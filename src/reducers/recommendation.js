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
    default:
      return state;
  }
};

export default recommendation;
