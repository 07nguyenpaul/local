// const exampleReducer = (state = {}, action) => {
//   switch (action.type) {
//     default:
//       return state
//   }
// }

const recommendationReducer = (state={}, action) => {
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

export default recommendationReducer;
// export default exampleReducer;
