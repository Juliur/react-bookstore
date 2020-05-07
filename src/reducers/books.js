import {FETCH_BOOKS_SUCCESS, FETCH_BOOK_BY_ID_SUCCESS, ADD_BOOK_TO_CART, INCREMENT_BOOK_QUANTITY} from '../actions/actionTypes.js';

const books = (state = {}, {type, payload}) =>{
	switch(type){
		case FETCH_BOOKS_SUCCESS: 
			return{
				...state,
				...payload.reduce((map, book)=>{
					map[book.id] = book;
					return map
				}, {})
			}
		case FETCH_BOOK_BY_ID_SUCCESS: 
			return Object.assign({}, state, {[payload['id']] : payload})
		case ADD_BOOK_TO_CART:
			let addedBook = state[payload];
			addedBook['stock'] = addedBook['stock'] - 1;
			return Object.assign({}, state);
		default:
			return state           
	}
}
export default books

export const getBook = function (state, id){
	return state[id];
}
	
export const getBooksArray = state =>{
	if(state) return Object.values(state)
}
	
