import React  from 'react';
import Card from 'react-bootstrap/Card';

const BookItem = ({
	image,
	title,
	price
	}) => {
		return(
			<Card className="h-100">
				<Card.Img variant="top" src={'http://'+ image} alt="..." className="p-1"/> 
				<Card.Body className="d-flex flex-column">
					<Card.Title>{title}</Card.Title>
					<p>{price} USD</p>
					<a href="#" className="btn btn-secondary text-uppercase p-2 font-weight-bold mt-auto">Add to cart</a>
				</Card.Body>
			</Card>
  )
}

export default BookItem