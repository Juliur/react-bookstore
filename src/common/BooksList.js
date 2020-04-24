import React  from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BookItem from './BookItem.js';

const BooksList = ({books, collectionId, quantity}) => {
	return(
		<Row>
			{
				books
					.filter(function(book){
						for(let i=0; i<=book.collections.length; i++){
							if(book.collections[i] === collectionId) return true 
						}
					})
					.slice(0, quantity)
					.map(({id, name, images,pricing})=>
				<Col md={3}
						key={id}
						className="p-2">
					<BookItem
						title={name.en}
						image={images[0].url}
						price={pricing.retail}
					/>		
				</Col>	
				)
			}
		</Row>
  )
}


export default BooksList