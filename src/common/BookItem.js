import React  from 'react';
import {connect} from 'react-redux';
import Card from 'react-bootstrap/Card';
import {addToCart} from '../actions/index.js';
import {getCartBooks} from '../reducers/rootReducer';

const BookItem = ({
	id,
	image,
	title,
	price,
	author,
	stock,
	addToCart,
	booksInCart,
	}) => {
		const renderBookStatus = (cartBooks, id) =>{
			if(cartBooks.length === 0) return false;
			for(let i=0; i<cartBooks.length; i++){
				if(cartBooks[i]["id"] === id) return true;
			}
			return false;
		}

		return(
			<Card className="shadow-custom h-100">
				<Card.Img variant="top" src={'http://'+ image} alt="..." className="p-1"/> 
				<Card.Body className="d-flex flex-column p-3">
					<Card.Title as="h6" className="font-weight-bold card-title">{title}</Card.Title>
					<p className="meta author">{author}</p>
					<p className="meta price font-weight-bold">{price}$</p>
				</Card.Body>
				<Card.Footer className="card-footer-custom pb-3 pl-3">
					<button 
						disabled={renderBookStatus(booksInCart, id)}
						onClick={() => addToCart(id)} 
						className="btn card-btn text-uppercase p-2 font-weight-bold mt-auto"
					>
						{renderBookStatus(booksInCart, id) ? "In cart" : "Add to cart"}
					</button>
				</Card.Footer>
			</Card>
  )
}

const mapStateToProps = state => {
	return{
		booksInCart: getCartBooks(state),
	}
}
const mapDispatchToProps = {
	addToCart,
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(BookItem)