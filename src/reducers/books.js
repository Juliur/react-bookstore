import { combineReducers } from 'redux';
import {FETCH_BOOKS_SUCCESS, ADD_BOOK_TO_CART, INCREMENT_BOOK_QUANTITY} from '../actions/actionTypes.js';

// const books = (state, {type, payload}) =>{
// 	switch(type){
// 		case ADD_BOOK_TO_CART:
// 			console.log(payload['availableQuantity'])
// 			return{
// 				...state,
// 				[payload] : payload['availableQuantity'] - 1,
// 			}
// 		default:
// 			return state
// 	}
// }

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
				let bookId= payload.id;
				let stock = state[payload.id]["stock"];
				console.log(Object.entries(state))
				// debugger
				return{
					...state,
					// state.bookId : stock - 1,
				}
			default:
				return state 
				// if(payload){
				// 	return {
				// 		...state,
				// 		[payload]: books(state[payload], {type, payload})
				// 	}
				// }
				          
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
	
