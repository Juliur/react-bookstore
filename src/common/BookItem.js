import React  from 'react';
import Card from 'react-bootstrap/Card';

const BookItem = ({
	image,
	title,
	price
	}) => {
		return(
			<Card className="p-1">
				<Card.Img variant="top" src={'http://'+ image} alt="..."/> 
				<Card.Body>
					<Card.Title>{title}</Card.Title>
					<p>{price} USD</p>
					<a href="#" className="btn btn-secondary text-uppercase p-2 font-weight-bold">Add to cart</a>
				</Card.Body>
			</Card>
  )
}

export default BookItem