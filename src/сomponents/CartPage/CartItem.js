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
        <Col xs={1} className="d-flex align-items-center">
          <Image src={image} className="table-img" />
        </Col>
        <Col xs={4}>
        <h6 className="font-weight-bold ml-2 table-title">
          <Link to={{ pathname: `/book/${id}/${title}`, id: id }}>
            {title}
          </Link>
        </h6>
        <p className="meta author ml-2">{author}</p> 
        </Col>
        <Col xs={2} className="d-flex align-items-center justify-content-center">
          <BookQuantity
            id={id}
            availableQuantity={stock}
            quantity={quantity}
          />
        </Col>
        <Col xs={2} className="d-flex align-items-center justify-content-center">
          <p className="text-center mb-0">${price}</p>
        </Col>
        <Col xs={2} className="d-flex align-items-center justify-content-center">
          <p className="text-center mb-0">${quantity*price}</p>
        </Col>
        <Col xs={1} className="d-flex align-items-center justify-content-center">
          <Buttons.RemoveFromCartBtn
            id={id}
          />
        </Col>
      </Row>
    )
  }
   
export default CartItem