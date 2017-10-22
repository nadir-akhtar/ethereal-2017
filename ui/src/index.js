import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {BrowserRouter as Router} from 'react-router-dom'
import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { fork } from 'redux-saga/effects';
import {routerReducer} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';

import homeReducer from './components/Home/home.reducer';

import watchCheckout from './components/Home/home.saga';

import App from "./App";

const rootReducer = combineReducers({
  form: formReducer,
  routing: routerReducer,
  // YOUR REDUCERS HERE
  home: homeReducer
});

const rootSaga = function* startForeman() {
  yield [
    // YOUR SAGAS HERE
    fork(watchCheckout)
  ]
};

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
const store = createStore(
  rootReducer, 
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
);

// then run the saga
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

export default store;