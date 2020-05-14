import React from 'react';
import {Link} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Buttons from '../../common/Buttons, Inputs/Buttons';

const WishListItem = ({id, title, image, author, price, stock}) => {
  const OutOfStock = (num) => (num === 0) ? true : false

  return(
    <Row className="no-gutters py-2">
      <Col xs={1} className="d-flex align-items-center">
        <Buttons.RemoveFromWishListBtn 
          id={id}
        />
      </Col>
      <Col xs={1} md={2} className="d-flex align-items-center">
        <Image src={image} className="table-img"/>
      </Col>
      <Col xs={4} md={9}>
        <h6 className="font-weight-bold ml-2 table-title">
          <Link to={{ pathname: `/react-bookstore/book/${id}/${title}`, id: id }}>
            {title}
          </Link>
        </h6>
        <p className="ml-2 ">{author}</p>
      </Col>

      <Col xs={2} className="d-flex align-items-center justify-content-center py-2">
        <p className="text-center mb-0">${price}</p>
      </Col>
      <Col xs={2} className="d-flex align-items-center justify-content-center py-2">
        <p className="text-center mb-0" 
          style={{color: OutOfStock(stock) ? "red" : "#0AB3A3"}}>
          {OutOfStock(stock) ? "Out of Stock" : "In Stock"}
        </p>
      </Col>
      <Col xs={2} className="d-flex align-items-center justify-content-center py-2">
        <Buttons.AddToCartBtn 
          id={id}
        />
      </Col>
    </Row>
  )
}

export default WishListItem