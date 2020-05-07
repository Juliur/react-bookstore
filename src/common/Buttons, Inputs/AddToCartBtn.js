import React from 'react';
import {connect} from 'react-redux';
import {getCartBooks} from '../../reducers/rootReducer';
import {addToCart} from '../../actions/index';
import './addToCartBtn.css';


const AddToCartBtn = ({booksInCart, id, addToCart,}) =>{

  const renderBookStatus = (cartBooks, id) =>{
    if(cartBooks.length === 0) return false;
    for(let i=0; i<cartBooks.length; i++){
      if(cartBooks[i]["id"] === id) return true;
    }
    return false;
  }

  return(
    <button 
      disabled={renderBookStatus(booksInCart, id)}
      onClick={() => addToCart(id)} 
      className="btn-custom text-uppercase p-2 font-weight-bold mt-auto"
		>
			{renderBookStatus(booksInCart, id) ? "In cart" : "Add to cart"}
		</button>
  )
}

const mapStateToProps = (state) =>{
  return{
    booksInCart: getCartBooks(state),
  }
}

const mapDispatchToProps = {
	addToCart,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddToCartBtn)