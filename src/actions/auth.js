import firebase from '../firebase';

const authorization = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export const startListeningToAuth = () => {
  return (dispatch, getState) => {
    console.log('Listening to auth');
    authorization.onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        dispatch({
          type: 'LOGIN',
          uid: user.uid,
          username: user.displayName || user.email
        });
      } else {
        if (getState().auth.status !== 'ANONYMOUS') {
          dispatch({
            type: 'LOGOUT'
          });
        }
      }
    });
  };
};

export const logIn = () => {
  return (dispatch) => {
    dispatch({
      type: 'ATTEMPTING_LOGIN'
    });

    authorization.signInWithPopup(provider)
    .then(result => {
      let userData = result.user;
      console.log(result.user);
      dispatch({
        type: 'LOGIN',
        uid: userData.uid,
        username: userData.displayName || userData.email
      });
    })
    .catch(error => {
      console.log('Error logging in: ', error);
    });
  };
};

export const logOut = () => {
  return (dispatch) => {
    dispatch({
      type: 'LOGOUT'
    });

    authorization.signOut()
    .then(() => {
      console.log('Sign out successful!')
    })
    .catch(error => {
      console.log('SIGN OUT ERROR: ', error);
    });
  };
};
