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
      <Col md={6}>
        <Row className="no-gutters py-2">
          <div className="col-1 d-flex align-items-center">
            <Buttons.RemoveFromWishListBtn 
              id={id}
            />
          </div>
          <div className="col-12 col-sm-12 col-md-2">
            <Image src={'http://'+ image} className="table-img"/>
          </div>
          <div className="col-12 col-sm-12 col-md-9">
            <h6 className="font-weight-bold ml-2 table-title">
              <Link to={{ pathname: `/book/${id}/${title}`, id: id }}>
							  {title}
						  </Link>
            </h6>
            <p className="ml-2">{author}</p>
          </div>
        </Row>
      </Col>
      <Col md={2} className="py-2">${price}</Col>
      <Col md={2} className="py-2">
        <p style={{color: OutOfStock(stock) ? "red" : "#0AB3A3"}}>
          {OutOfStock(stock) ? "Out of Stock" : "In Stock"}
        </p>
      </Col>
      <Col md={2} className="py-2">
        <Buttons.AddToCartBtn 
          id={id}
        />
      </Col>
    </Row>
  )
}

export default WishListItem