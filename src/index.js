import React from 'react';
import { render } from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Match } from 'react-router';
// import Routes from './routes';
import thunk from 'redux-thunk';
import reducers from './reducers/index';
import App from './components/App';
// import MainDashBoard from './components/MainDashBoard';
import DetailedPin from './components/DetailedPin';
import AddingRecommendation from './containers/AddingRecommendation';
import * as actions from './actions/auth';
import firebase from 'firebase';
// const middleware = [thunk];
require('!style!css!sass!./styles/main.scss');

const firebaseApp = {
  apiKey: 'AIzaSyDwnsJcOAy2cP2lyTFdWcanOMTf2DRZpIs',
  authDomain: 'local-cb336.firebaseapp.com',
  databaseURL: 'https://local-cb336.firebaseio.com',
  storageBucket: 'local-cb336.appspot.com',
  messagingSenderId: '514582937003'
};

console.log('WHAAAT');

firebase.initializeApp(firebaseApp);

const enhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
);

const store = createStore(
  reducers,
  {},
  enhancers
);

const Root = () => {
  return(
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Match exactly pattern="/" component={App} />
          <Match pattern='/newrecommendation' component={AddingRecommendation} />
          <Match pattern='/detailedpin' component={DetailedPin} />
        </div>
      </BrowserRouter>
    </Provider>
  )
}

render(<Root />, document.querySelector('#root'))

store.dispatch(actions.startListeningToAuth());
