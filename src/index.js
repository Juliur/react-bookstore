import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer.js';
import App from './App';
import ScrollToTop from './common/ScrollToTop.js';
import {fetchBooks, fetchCollections} from './actions/index.js';
import {loadState, saveState} from './localStorage/localStorage.js';

const persistedState = loadState('cart');

const store = createStore(rootReducer, {cart: persistedState}, composeWithDevTools(applyMiddleware(thunk)));
store.dispatch(fetchBooks());
store.dispatch(fetchCollections());

store.subscribe(() => {
  saveState('cart', store.getState().cart);
});


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router basename="/">
        <ScrollToTop />
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


