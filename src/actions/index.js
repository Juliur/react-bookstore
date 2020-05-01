import axios from "axios";
import * as types from './actionTypes.js';
/*
 * генераторы экшенов
 */

export const fetchBooks = () => async dispatch => {
    dispatch({type: types.FETCH_BOOKS_START});
    
    try{
			const response = await axios("http://localhost:8000/v1/products");
			const books = response.data.items;
        dispatch({
          type: types.FETCH_BOOKS_SUCCESS, payload: books
        });
       
    }catch (err){
      dispatch( {type: types.FETCH_BOOKS_FAIL, payload: err})
    }
};

export const fetchCollections = () => async dispatch => {
    dispatch({type: types.FETCH_COLLECTIONS_START});

    try{
			const responseCollections = await axios.get("http://localhost:8000/v1/collections");
			const collections = responseCollections.data.items;
			dispatch({
				type: types.FETCH_COLLECTIONS_SUCCESS, payload: collections
			});
    }catch (err){
			dispatch( {type: types.FETCH_COLLECTIONS_FAIL, payload: err})
		}
};

const addBookToCart = book => ({
	type: types.ADD_BOOK_TO_CART,
	payload: book,
})

export const addToCart = book => (dispatch, getState) => {
  if (getState().books.booksMap[book.id].stock > 0) {
    dispatch(addBookToCart(book))
  }
}

export const removeBookFromCart = id => dispatch => {
	dispatch({
		type: types.REMOVE_BOOK_FROM_CART,
		payload: id,
	})
};

export const incrementBookQuantity = id => dispatch => {
	dispatch({
		type: types.INCREMENT_BOOK_QUANTITY,
		payload: id,
	})
};

export const decrementBookQuantity = id => dispatch => {
	dispatch({
		type: types.DECREMENT_BOOK_QUANTITY,
		payload: id,
	})
};
