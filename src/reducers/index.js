// const exampleReducer = (state = {}, action) => {
//   switch (action.type) {
//     default:
//       return state
//   }
// }


// export default exampleReducer;

import { combineReducers } from 'redux';
import recommendation from './recommendation';
import authReducer from './auth';

const reducers = combineReducers({
  recommendation,
  authReducer
});

export default reducers;
