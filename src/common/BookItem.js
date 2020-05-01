import React  from 'react';
import {connect} from 'react-redux';
import Card from 'react-bootstrap/Card';
import {addToCart} from '../actions/index.js';

const BookItem = ({
	id,
	image,
	title,
	price,
	author,
	availableQuantity,
	addToCart
	}) => {
		return(
			<Card className="shadow h-100">
				<Card.Img variant="top" src={'http://'+ image} alt="..." className="p-1"/> 
				<Card.Body className="d-flex flex-column">
					<Card.Title>{title}</Card.Title>
					<p>{author}</p>
					<p>{price} USD</p>
					<button onClick={() => addToCart({id, image, title, price, author, availableQuantity})} className="btn btn-secondary text-uppercase p-2 font-weight-bold mt-auto">Add to cart</button>
				</Card.Body>
			</Card>
  )
}

export default connect(null, {addToCart})(BookItem)