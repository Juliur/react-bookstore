import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import {removeBookFromCart, incrementBookQuantity, decrementBookQuantity} from '../../actions/index.js';
import BookQuantity from '../../common/Buttons, Inputs/BookQuantity.js';

class CartItem extends Component{
  render(){
    const {
      id, 
      title, 
      image, 
      price,
      author, 
      availableQuantity, 
      quantity,
      removeBookFromCart, 
      incrementBookQuantity,
      decrementBookQuantity
    } = this.props;

    return(
      <div className="cart-item mb-3 custom-shadow">
        <Row className="no-gutters">
          <Col md={2} className="d-flex flex-column">
            <Link to={`/book/${title}`}>
              <Image src={'http://'+ image} fluid />
            </Link>
          </Col>
          <Col md={3}>
            <h5>Name</h5>
            <p>{title}</p>
            <p>{author}</p> 
          </Col>
          <Col md={2}>
            <h5>Quantity</h5>
            <BookQuantity
              availableQuantity={availableQuantity}
              quantity={quantity}
              incrementBookQuantity={()=>incrementBookQuantity(id)}
              decrementBookQuantity={()=>decrementBookQuantity(id)}
            />
          </Col>
          <Col md={2}>
            <h5>Price</h5>
            <p>{price}</p>
          </Col>
          <Col md={2}>
            <h5>Total</h5>
            <p>{quantity*price}</p>
          </Col>
          <Col md={1}>
            <button onClick={()=> removeBookFromCart(id)}><i className ="fa fa-trash-o" aria-hidden="true"></i></button>
          </Col>
        </Row>
      </div>
    )
  }
} 
  
const mapDispatchToProps = {
  removeBookFromCart,
  incrementBookQuantity,
  decrementBookQuantity,
}

export default connect(null, mapDispatchToProps)(CartItem)