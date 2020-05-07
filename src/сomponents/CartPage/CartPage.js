import React, {Component} from 'react';
import {connect} from 'react-redux';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import CartItem from './CartItem.js';
import CartTotal from './CartTotal.js';
import {getCartBooks, getTotalPrice} from '../../reducers/rootReducer.js';
import './cartPage.css';

class CartPage extends Component{

  renderCartPage() {
    const {booksInCart, totalPrice} = this.props; 

    if(booksInCart.length > 0){
      return(
        <Row>
          <Col md={8}>
            {booksInCart.map(({id, name, pricing, images, quantity}) =>
            <CartItem
              key={id}
              id={id}
              title={name.en}
              image={images[0].url}
              price={pricing.retail}
              author={name.pt}
              quantity={quantity}
            />)
          }
          </Col>
          <Col md={4}>
            <CartTotal
              totalPrice={totalPrice}/>
          </Col>
        </Row>
      )
    }else{
      return(
        <div className="d-flex flex-column">
          <div className="empty-cart-img m-auto"></div>
          <h4>Your cart is currently empty</h4>
        </div>
      )
    } 
  }

  render(){
    return(
      <Container>
        <h3 className="text-capitalize py-3">Cart</h3>
        {this.renderCartPage()}
      </Container>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    booksInCart: getCartBooks(state),
    totalPrice: getTotalPrice(state),
  }
}

export default connect(mapStateToProps)(CartPage)