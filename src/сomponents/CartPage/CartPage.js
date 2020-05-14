import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import CartItem from './CartItem.js';
import CartTotal from './CartTotal.js';
import {getCartBooks, getTotalPrice} from '../../reducers/rootReducer.js';
import './cartPage.css';

const CartPage = ({booksInCart, totalPrice}) =>{

  const renderCartPage = arr => {
    if(arr.length > 0){
      return(
        <div>
          {arr.map(({id, name, pricing, images, quantity, stock}) =>
            <CartItem
              key={id}
              id={id}
              title={name.en}
              image={images[0].url}
              price={pricing.retail}
              author={name.pt}
              quantity={quantity}
              stock={stock}
            />)
          }
          <Row className="no-gutters py-2 bordered-row flex-column align-items-center">
            <h6 className="font-weight-bold mb-0">Cart Total: </h6>
            <span className="font-weight-bold mt-2">${totalPrice}</span>
          </Row>
        </div>
      )
    }else{
      return(
        <div className="d-flex flex-column plug">
          <div className="empty-cart-img m-auto"></div>
          <h4>Your cart is currently empty</h4>
          <div className="link-to-all d-flex justify-content-center w-100 pt-4">
            <Link to="/react-bookstore">Back to store</Link>
          </div>
        </div>
      )
    } 
  }

  return(
    <div id="table-wrap">
      <Container className="table shadow-custom p-4">
        <h4 className="pb-4 mb-0">Cart</h4>
        <Row className="mb-3 py-2 bordered-row no-gutters">
          <Col xs={5} className="table-header">Product</Col>
          <Col xs={2} className="table-header text-center">Price</Col>
          <Col xs={2} className="table-header text-center">Quantity</Col>
          <Col xs={2} className="table-header text-center">Total</Col>
          <Col xs={1} className="table-header text-center"></Col>
        </Row>
        {renderCartPage(booksInCart)}
        
      </Container>
    </div>
  )
}

const mapStateToProps = state =>{
  return{
    booksInCart: getCartBooks(state),
    totalPrice: getTotalPrice(state),
  }
}

export default connect(mapStateToProps)(CartPage)