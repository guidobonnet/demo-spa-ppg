import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import {applyMiddleware, createStore} from 'redux';
import rootReducer from './store/rootReducer';
import {BrowserRouter} from 'react-router-dom';
import thunk from 'redux-thunk';
import {fetchShowData} from './store/actions';

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(fetchShowData());

ReactDOM.render((
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
