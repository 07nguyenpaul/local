import firebase from 'firebase';

const firebaseApp = {
  apiKey: 'AIzaSyDwnsJcOAy2cP2lyTFdWcanOMTf2DRZpIs',
  authDomain: 'local-cb336.firebaseapp.com',
  databaseURL: 'https://local-cb336.firebaseio.com',
  storageBucket: 'local-cb336.appspot.com',
  messagingSenderId: '514582937003'
};

firebase.initializeApp(firebaseApp);

const provider = new firebase.auth.GoogleAuthProvider();

export const startListeningToAuth = () => {
  return (dispatch, getState) => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch({
          type: 'LOGIN',
          uid: user.uid,
          username: user.displayName
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
}

export const logIn = () => {
  return (dispatch) => {
    dispatch({
      type: 'ATTEMPTING_LOGIN'
    });

    firebase.auth().signInWithPopup(provider)
    .then(result => {
      dispatch({
        type: 'LOGIN',
        uid: result.user.uid,
        username: result.user.displayName
      });
    })
    .catch(error => {
      console.log('Error logging in: ', error);
    });
  };
}

export const logOut = () => {
  return (dispatch,) => {
    dispatch({
      type: 'LOGOUT'
    });

    firebase.auth().signOut()
    .then(() => {
      console.log('Sign out successful!')
    })
    .catch(error => {
      console.log('SIGN OUT ERROR: ', error);
    });
  }
}
