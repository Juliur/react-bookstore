import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import {HashRouter as Router} from 'react-router-dom';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer.js';
import App from './App';
import ScrollToTop from './common/ScrollToTop.js';
import {fetchBooks, fetchCollections} from './actions/index.js';
import {loadState, saveState} from './localStorage/localStorage.js';

const persistedCart = loadState('cart');
const persistedWishList = loadState('wishList')

const store = createStore(
  rootReducer, 
  {
    cart: persistedCart, 
    wishList: persistedWishList
  }, 
  composeWithDevTools(applyMiddleware(thunk)));

store.dispatch(fetchBooks());
store.dispatch(fetchCollections());

store.subscribe(() => {
  saveState('cart', store.getState().cart);
});

store.subscribe(() => {
  saveState('wishList', store.getState().wishList);
});


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router basename="/react-bookstore">
        <ScrollToTop />
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


