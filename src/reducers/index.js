// const exampleReducer = (state = {}, action) => {
//   switch (action.type) {
//     default:
//       return state
//   }
// }


// export default exampleReducer;

import { combineReducers } from 'redux';
import recommendation from './recommendation';

const reducers = combineReducers({
  recommendation
});

export default reducers;
