import {combineReducers} from 'redux';
import books, * as fromBooks from './books.js';
import collections from './collections.js';
import cart, * as fromCart from './cart.js';
import wishList, * as fromWishList from './wishList';

const rootReducer = combineReducers({
    books,
    collections,
		cart,
		wishList,
})

export default rootReducer

const getBooksInCart = state => fromCart.getBooksInCart(state)
const getBooksQuantity = (state, id) => fromCart.getBooksQuantity(state, id)
const getBook = (state, id) => fromBooks.getBook(state, id)
const getWishList = state => fromWishList.getWishList(state)

export const getWishListBooks = state =>{
	if(state.wishList.length === 0) return [];
	let result = getWishList(state.wishList).map(id => ({
		...getBook(state.books, id)
	}))
	return result
}

export const getCartBooks = state => {
	if(Object.keys(state.books).length === 0) return [];
	let arr = getBooksInCart(state.cart);
	let result = arr.map(id => ({
    ...getBook(state.books, id),
    quantity: getBooksQuantity(state.cart, id)
	}))
	return result
}

export const getTotalPrice = function (state){
	let res = getCartBooks(state).reduce((total, book)=>
	total + book.quantity * book['pricing']['retail'], 0);
	return res
}

export const getTotalBooksAmount = function(state){
	let res = Object.values(state.addedBooksQuantity).reduce((total, current)=>
	total +current, 0);
	return res;
}

