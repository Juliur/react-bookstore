import {combineReducers} from 'redux';
import books from './books.js';
import collections from './collections.js';

const rootReducer = combineReducers({
    books,
    collections,
})

export default rootReducer
