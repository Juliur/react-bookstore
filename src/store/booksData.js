import {FETCH_BOOKS_SUCCESS,} from '../actions/actionTypes.js';

const initialState = {
    books: [],
}

const booksData = (state = initialState, {type, payload}) =>{
    switch(type){
        case FETCH_BOOKS_SUCCESS: 
            return state.books.concat(payload);
        default:
            return state             
        }
    }

export default booksData