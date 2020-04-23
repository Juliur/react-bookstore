import axios from "axios";
import {FETCH_BOOKS_START,
        FETCH_BOOKS_SUCCESS,
        FETCH_BOOKS_FAIL,
        FETCH_COLLECTIONS_START,
        FETCH_COLLECTIONS_SUCCESS,
        FETCH_COLLECTIONS_FAIL,
 } from './actionTypes.js';
/*
 * генераторы экшенов
 */

export const fetchBooks = () => async dispatch => {
    dispatch({type: FETCH_BOOKS_START});
    
    try{
			const response = await axios("http://localhost:8000/v1/products");
				const books = response.data.items;
        dispatch({
            type: FETCH_BOOKS_SUCCESS, payload: books
        });
       
    }catch (err){
        dispatch( {type:FETCH_BOOKS_FAIL, payload: err})
    }
}

export const fetchCollections = () => async dispatch => {
    dispatch({type: FETCH_COLLECTIONS_START});

    try{
			const responseCollections = await axios.get("http://localhost:8000/v1/collections");
			const collections = responseCollections.data.items;
			dispatch({
				type: FETCH_COLLECTIONS_SUCCESS, payload: collections
			});
    }catch (err){
			dispatch( {type:FETCH_COLLECTIONS_FAIL, payload: err})
		}
}
