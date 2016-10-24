import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
// import Routes from './routes';
// import thunk from 'redux-thunk';
import reducer from './reducers';
import App from './components/App';

// const middleware = [thunk];
require('!style!css!sass!./styles/main.scss');

const store = createStore(
  combineReducers({
    weatherApp: reducer,
  }),
  {}, // initial state object
  // applyMiddleware(...middleware)
);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}> </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
