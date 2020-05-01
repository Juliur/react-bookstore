import {combineReducers} from 'redux';
import books from './books.js';
import collections from './collections.js';
import cart, * as fromCart from './cart.js';

const rootReducer = combineReducers({
    books,
    collections,
    cart,
})

export default rootReducer

// const getBooksQuantity = (state, id) => fromCart.getBooksQuantity(state, id);
// const getBooksInCart = state => fromCart.getBooksInCart(state);

export const getCartBooks = state => {
	// debugger
	let res = state['booksInCart'].map(book => ({
		...book,
		quantity: state['addedBooksQuantity'][book.id]
	}));
	return res
};

// export const getTotalPrice = (state) =>({
// 	let res = getCartBooks(state).reduce((total, book)=>
// 	total + book.quantity * book.price, 0)
// })

export const getTotalPrice = function (state){
	let res = getCartBooks(state).reduce((total, book)=>
	total + book.quantity * book.price, 0);
	return res
}


	// let res = state.booksInCart;
	// return res;
	// state.booksInCart.reduce((total, book)=>({
	// total + book.quantity*book.price, 0)})

