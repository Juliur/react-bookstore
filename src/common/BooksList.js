import React, {Component}  from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BookItem from './BookItem.js';

class BooksList extends Component {

	itemsToRender(arr, num){
		if(typeof(num) === "number"){
			return num
		}else return arr.length
	}

	render(){
		const {books, collectionId, quantity} = this.props;
		return(
			<Row>
				{
					books
						.filter(function(book){
							for(let i=0; i<=book.collections.length; i++){
								if(book.collections[i] === collectionId) return true 
							}
						})
						.slice(0, this.itemsToRender(books, quantity))
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
}

export default BooksList