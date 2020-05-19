import React from 'react';
import { connect } from 'react-redux';
import { addLike, removeLike, addToCart, removeBookFromCart } from '../../actions/index';
import { getCartBooks } from '../../reducers/rootReducer';
import './buttons.css';

const AddToWishListBtn = ({ id, type, isLiked, addLike, removeLike, }) => {
  if (type === "expand") {
    return (
      <button className="btn-hover" onClick={()=> { isLiked ? removeLike(id) : addLike(id)}}>
        <span className="btn-circle">
          <span className="btn-icon">
            { isLiked ? 
              <i className="fa fa-heart" aria-hidden="true"></i> :
              <i className="fa fa-heart-o" aria-hidden="true"></i>
            }
          </span>
        </span>
        <span className="btn-text">
          { isLiked ? "Added" : "Add to wishlist"}
        </span>
      </button>
    )
  } else {
    return (
      <button className="btn-constant" onClick={()=> { isLiked ? removeLike(id) : addLike(id)}}>
        { isLiked ? 
        <span className="btn-text">
          <i className="fa fa-heart mr-2" aria-hidden="true"></i>
          Added to wishlist
        </span> :
        <span className="btn-text">
          <i className="fa fa-heart-o mr-2" aria-hidden="true"></i>
          Add to wishlist
        </span>
        }
      </button>
    )
  }

}

const RemoveFromWishListBtn = ({ id, removeLike }) => {
  return (
    <button onClick={()=> removeLike(id)} className="remove-btn wishlist"></button>
  )
}

const RemoveFromCartBtn = ({ id, removeBookFromCart }) => {
  return (
    <button onClick={()=> removeBookFromCart(id)} className="remove-btn cart"></button>
  )
}


const AddToCartBtn = ({ booksInCart, id, addToCart, }) => {
  const renderBookStatus = (cartBooks, id) => {
    if (cartBooks.length === 0) return false;
    for (let i = 0; i < cartBooks.length; i++) {
      if (cartBooks[i]["id"] === id) return true;
    }
    return false;
  }

  return (
    <button 
      disabled={renderBookStatus(booksInCart, id)}
      onClick={() => addToCart(id)} 
      className="btn-custom text-uppercase p-2 font-weight-bold"
    >
      {renderBookStatus(booksInCart, id) ? "In cart" : "Add to cart"}
    </button>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLiked: state.wishList.includes(ownProps.id),
    booksInCart: getCartBooks(state),
  }
}

const mapDispatchToProps = {
  addLike,
  removeLike,
  addToCart,
  removeBookFromCart,
}

export default {
  AddToWishListBtn: connect(mapStateToProps, mapDispatchToProps)(AddToWishListBtn),
  AddToCartBtn: connect(mapStateToProps, mapDispatchToProps)(AddToCartBtn),
  RemoveFromWishListBtn: connect(null, mapDispatchToProps)(RemoveFromWishListBtn),
  RemoveFromCartBtn: connect(null, mapDispatchToProps)(RemoveFromCartBtn)
}