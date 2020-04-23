import {FETCH_BOOKS_SUCCESS,} from '../actions/actionTypes.js';

const booksData = (state = [], {type, payload}) =>{
	switch(type){
		case FETCH_BOOKS_SUCCESS: 
			return [
				...state,
				...payload
			]
			default:
				return state             
		}
	}

export default booksData