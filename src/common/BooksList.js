import React  from 'react';
import {connect} from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BookItem from './BookItem.js';


const BooksList = ({books, collectionId}) => {
	return(
		<Row>
			{
				books
					.filter(function(book){
						for(let i=0; i<=book.collections.length; i++){
							if(book.collections[i] === collectionId) return true 
						}
					})
					.map(({id, name, images,pricing})=>
				<Col md={3}
						key={id}>
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

const mapStateToProprs = (state) => {
	return {
		books : state.books
	}
}

export default connect(mapStateToProprs)(BooksList)