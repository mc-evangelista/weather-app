import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'; //middleware add to applyMiddleware

//ACTION -> MIDDLEWARE -> REDUCER
//Middlewares - functions that take action - action type/payload - 
// middleware can choose to let the ACTION pass thru(inspecting), manipulate/logs/stop
//before reaching any reducer
//like GATEKEEPERS
//intercepting actions to modify - why ? -->
//REDUX-PROMISE

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
