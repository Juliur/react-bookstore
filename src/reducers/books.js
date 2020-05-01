import { combineReducers } from 'redux';
import {FETCH_BOOKS_SUCCESS, ADD_BOOK_TO_CART, INCREMENT_BOOK_QUANTITY} from '../actions/actionTypes.js';

const booksMap = (state = {}, {type, payload}) =>{
	switch(type){
		case FETCH_BOOKS_SUCCESS: 
			return{
				...state,
				...payload.reduce((map, book)=>{
					map[book.id] = book;
					return map
				}, {})
			}
			case ADD_BOOK_TO_CART:
				let newBook = state[payload.id];
				newBook['stock'] = newBook['stock'] - 1;
				let result = Object.assign({}, state, newBook);
				return result
			default:
				return state           
	}
}

const visibleBookIds = (state = [], {type, payload}) => {
  switch (type) {
    case FETCH_BOOKS_SUCCESS: 
      return payload.map(book => book.id)
    default:
      return state
  }
}

export default combineReducers({
  booksMap,
  visibleBookIds
})

export const getBook = (state, id) =>
	state.booksMap[id]
	
export const getVisibleBooks = state =>{
	return state.visibleBookIds.map(id => getBook(state, id));
}
	
