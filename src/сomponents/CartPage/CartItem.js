import React from 'react';
import {Link} from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Buttons from '../../common/Buttons, Inputs/Buttons';
import BookQuantity from '../../common/Buttons, Inputs/BookQuantity.js';

const CartItem = ({
  id, 
  title, 
  image, 
  price,
  author,  
  quantity,
  stock,
}) => {
    return(
      <Row className="no-gutters py-2">
        <Col md={1} sm={12}>
          <Image src={'http://'+ image} className="table-img" />
        </Col>
        <Col md={4}>
        <h6 className="font-weight-bold ml-2 table-title">
          <Link to={{ pathname: `/book/${id}/${title}`, id: id }}>
            {title}
          </Link>
        </h6>
        <p className="meta author ml-2">{author}</p> 
        </Col>
        <Col md={2}>
          <BookQuantity
            id={id}
            availableQuantity={stock}
            quantity={quantity}
          />
        </Col>
        <Col md={2}>
          <p>${price}</p>
        </Col>
        <Col md={2}>
          <p>{quantity*price}</p>
        </Col>
        <Col md={1}>
          <Buttons.RemoveFromCartBtn
            id={id}
          />
        </Col>
      </Row>
    )
  }
   
export default CartItem