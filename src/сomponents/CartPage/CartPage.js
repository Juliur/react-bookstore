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

  render(){
    const {booksInCart, totalPrice} = this.props;
    return(
      <Container>
        <h3 className="text-capitalize">Cart</h3>
        <Row>
          <Col md={8}>
            {
              booksInCart.map(({author, id, image, price, quantity, title, availableQuantity}) =>
                <CartItem
                  key={id}
                  id={id}
                  title={title}
                  image={image}
									price={price}
									author={author}
                  availableQuantity={availableQuantity}
                  quantity={quantity}
                />
              )
            }
          </Col>
          <Col md={4}>
            <CartTotal
              totalPrice={totalPrice}/>
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    booksInCart: getCartBooks(state.cart),
    totalPrice: getTotalPrice(state.cart)
  }
}

export default connect(mapStateToProps)(CartPage)