// if u npm install - import 'modname/folder/css/min.css'
// import 'boostrap/dist/css/bootstrap.css'
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
//asssist to figure if somone logged on
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const store = createStore (reducers, {}, applyMiddleware (reduxThunk));

ReactDOM.render (
  <Provider store={store}><App /></Provider>,
  document.querySelector ('#root')
);

// ReactDOM.render (<App />, document.querySelector ('#root'));
