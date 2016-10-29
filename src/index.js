import React from 'react';
import { render } from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Match } from 'react-router';
// import Routes from './routes';
// import thunk from 'redux-thunk';
import reducers from './reducers/index';
import App from './components/App';
// import MainDashBoard from './components/MainDashBoard';
import DetailedPin from './components/DetailedPin';
import AddingRecommendation from './containers/AddingRecommendation';

// const middleware = [thunk];
require('!style!css!sass!./styles/main.scss');
// import './styles/main.scss';
// require('./styles/main.scss');

const enhancers = compose(
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
