import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Match } from 'react-router';
// import Routes from './routes';
// import thunk from 'redux-thunk';
import reducer from './reducers';
import App from './components/App';
// import MainDashBoard from './components/MainDashBoard';
import DetailedPin from './components/DetailedPin';
import AddingRecommendation from './components/AddingRecommendation';

// const middleware = [thunk];
require('!style!css!sass!./styles/main.scss');

const store = createStore(
  combineReducers({
    weatherApp: reducer,
  }),
  {},// initial state object
  // applyMiddleware(...middleware)
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
