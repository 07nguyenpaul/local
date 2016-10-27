const recommendation = (state={}, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, Object.assign({ id: Date.now(),
                                        name: action.content.name,
                                        location: action.content.location,
                                        description: action.content.description
                                     })
      ];
    default:
      return state;
  }
};

export default recommendation;
