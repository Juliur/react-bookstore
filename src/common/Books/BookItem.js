import React  from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import {addToCart, addLike, removeLike} from '../../actions/index.js';
import {getCartBooks} from '../../reducers/rootReducer';
import Buttons from '../Buttons, Inputs/Buttons';

const BookItem = ({
	id,
	image,
	title,
	price,
	author,
	isLiked,
	addLike,
	removeLike,
	}) => {

		return(
			<Card className="shadow-custom h-100">
				<div className="card-img-link-wrap d-inline-block">
					<Link to={{ pathname: `/book/${id}/${title}`,
										id: id }} className="d-block card-img-link h-100" title={`${title}`}>
						<Card.Img variant="top" src={'http://'+ image} alt="..." className="p-1 h-100"/>
					</Link>
					<div className="box-hover">
						<Buttons.AddToWishListBtn
							id={id}
							type={"expand"}
						/>
					</div>
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
					<Buttons.AddToCartBtn
						id={id}
					/>
				</Card.Footer>	
			</Card>
  )
}

const mapStateToProps = (state, ownProps) => {
	return{
		booksInCart: getCartBooks(state),
		isLiked: state.wishList.includes(ownProps.id),
	}
}
const mapDispatchToProps = {
	addToCart,
	addLike,
	removeLike
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(BookItem)