const initialState = {
  auth: {
    status: 'ANONYMOUS',
    username: null,
    uid: null
  }
};

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ATTEMPTING_LOGIN':
      return {
        status: 'AWAITING_AUTH_RESPONSE',
        username: 'guest',
        uid: null
      };
    case 'LOGOUT':
      return {
        status: 'ANONYMOUS',
        username: 'guest',
        uid: null
      };
    case 'LOGIN':
      return {
        status: 'LOGGED_IN',
        username: action.username,
        uid: action.uid
      };
    default:
      return state;
  }
};

export default authReducer;
