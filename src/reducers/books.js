import {FETCH_BOOKS_SUCCESS, ADD_BOOK_TO_CART, INCREMENT_BOOK_QUANTITY} from '../actions/actionTypes.js';

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
			case ADD_BOOK_TO_CART:
				let addedBook = state[payload];
				addedBook['stock'] = addedBook['stock'] - 1;
				return Object.assign({}, state);
			default:
				return state           
	}
}
export default books

// const visibleBookIds = (state = [], {type, payload}) => {
//   switch (type) {
//     case FETCH_BOOKS_SUCCESS: 
//       return payload.map(book => book.id)
//     default:
//       return state
//   }
// }


export const getBook = function (state, id){
	let book = state[id];
	return book
}

	
export const getBooksArray = state =>{
	if(state) return Object.values(state)
}
	
