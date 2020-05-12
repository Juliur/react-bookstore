import {
  ADD_BOOK_TO_CART, 
  REMOVE_BOOK_FROM_CART,
  INCREMENT_BOOK_QUANTITY,
  DECREMENT_BOOK_QUANTITY,
} from '../actions/actionTypes.js';

const initialState = {
  booksInCart: [],
  addedBooksQuantity: {},
}

const booksInCart = (state = initialState.booksInCart, {type, payload}) => {
  switch(type){
    case ADD_BOOK_TO_CART: 
      if(state.includes(payload)) return state;
      return[
        ...state,
        payload
      ]
    case REMOVE_BOOK_FROM_CART:
      return state.filter(id => id !== payload);
    default:
      return state
    }
}

  
const addedBooksQuantity = (state = initialState.addedBooksQuantity, {type, payload}) => {
  switch (type) {
    case ADD_BOOK_TO_CART:
      return { 
        ...state,
        [payload]: (state[payload] || 0) + 1
      }
    case REMOVE_BOOK_FROM_CART:
      let result = Object.keys(state).reduce((obj, key)=>{
        if(key !== payload){
          obj[key] = state[key]
        }
        return obj
      }, {})
      return result;
    case INCREMENT_BOOK_QUANTITY: 
      return {
        ...state,
        [payload]: state[payload] + 1
      } 
    case DECREMENT_BOOK_QUANTITY: 
      return {
        ...state,
        [payload]: state[payload] - 1
      } 
    default:
      return state
  }
}


export const getBooksInCart = state => state.booksInCart;

export const getBooksQuantity = (state, id) =>
  state.addedBooksQuantity[id] || 0

const cart = (state = initialState, {type, payload}) =>{
  switch (type) {
    default:
      return {
        booksInCart: booksInCart(state.booksInCart, {type, payload}),
        addedBooksQuantity: addedBooksQuantity(state.addedBooksQuantity, {type, payload})
      }
  }
}

export default cart

