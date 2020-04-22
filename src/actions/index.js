import API from '../utils/API.js';
import {FETCH_BOOKS_START,
        FETCH_BOOKS_SUCCESS,
        FETCH_BOOKS_FAIL,
 } from './actionTypes.js';
/*
 * генераторы экшенов
 */

export const fetchBooks = () => async dispatch => {
    dispatch({type: FETCH_BOOKS_START});
    
    try{
        const response = await API.get();
        const books = response.data.items;
        
        dispatch({
            type: FETCH_BOOKS_SUCCESS, payload: books
        });
       
    }catch (err){
        dispatch( {type:FETCH_BOOKS_FAIL, payload: err})
    }
}