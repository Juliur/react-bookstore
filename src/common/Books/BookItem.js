import React  from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import {addToCart} from '../../actions/index.js';
import {getCartBooks} from '../../reducers/rootReducer';
import AddToCartBtn from '../Buttons, Inputs/AddToCartBtn';

const BookItem = ({
	id,
	image,
	title,
	price,
	author,
	addToCart,
	booksInCart,
	}) => {

		return(
			<Card className="shadow-custom h-100">
				<div className="card-img-link-wrap d-inline-block">
					<Link to={`/book/${title}`} className="d-block card-img-link h-100" title={`${title}`}>
						<Card.Img variant="top" src={'http://'+ image} alt="..." className="p-1 h-100"/>
					</Link>
				</div>
				<Card.Body className="d-flex flex-column p-3">
					<Card.Title as="h6" className="font-weight-bold">
						<Link 
							to={{ pathname: `/book/${id}/${title}`,
										id: id }}>
							{title}
						</Link>
					</Card.Title>
					<p className="meta author">{author}</p>
					<p className="meta price font-weight-bold">{price}$</p>
				</Card.Body>
				<Card.Footer className="card-footer-custom pb-3 pl-3">
					<AddToCartBtn
						id={id}
					/>
					{/* <button 
						disabled={renderBookStatus(booksInCart, id)}
						onClick={() => addToCart(id)} 
						className="btn card-btn text-uppercase p-2 font-weight-bold mt-auto"
					>
						{renderBookStatus(booksInCart, id) ? "In cart" : "Add to cart"}
					</button> */}
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