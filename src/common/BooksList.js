import React, {Component}  from 'react';
import {Link} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import BookItem from './BookItem.js';

class BooksList extends Component {

	itemsToRender(arr, num){
		if(typeof(num) === "number"){
			return num
		}else return arr.length
	}

	render(){
		const {books, collectionId, quantity, shouldHide, title } = this.props;
		return(
			<section>
				<Container>
					<h3 className="text-capitalize">{title}</h3>
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
						<Link to={`/category/${title}`} className={shouldHide ? 'hidden' : ''}>See all</Link>
				</Row>
			</Container>
		</section>
		)
	}
}

export default BooksList