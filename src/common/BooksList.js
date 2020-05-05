import React, {Component}  from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import BookItem from './BookItem.js';
import {getBooksArray} from '../reducers/books';

class BooksList extends Component {

	itemsToRender(arr, num){
		if(typeof(num) === "number"){
			return num
		}else return arr.length
	}

	render(){
		const {books, collectionId, quantity, shouldHide, title } = this.props;
		return(
			<section className="pt-3">
				<Container>
					<h3 className="text-capitalize">{title}</h3>
					<Row>
					{
						books
							.filter(book=>{
								for(let i=0; i<=book.collections.length; i++){
									if(book.collections[i] === collectionId) return true 
								}
							})
							.slice(0, this.itemsToRender(books, quantity))
							.map(({id, name, images, pricing, stock})=>
								<Col md={3}
										key={id}
										className="mb-4"
									>
									<BookItem
										id={id}
										title={name.en}
										image={images[0].url}
										price={pricing.retail}
										author={name.pt}
										stock={stock}
									/>		
								</Col>	
							)
						}
						<div className="link-to-all d-flex justify-content-center w-100 pt-5">
							<Link to={`/category/${title}`} className={shouldHide ? 'hidden' : ''}>
								See all
								<i className="fa fa-lg fa-angle-right" aria-hidden="true"></i>
							</Link>
						</div>
				</Row>
			</Container>
		</section>
		)
	}
}

const mapStateToProps = state =>{
	return{
		books: getBooksArray(state.books)
	}
}

export default connect(mapStateToProps)(BooksList)