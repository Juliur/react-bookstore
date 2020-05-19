import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getWishListBooks } from '../../reducers/rootReducer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import WishListItem from './WishListItem';

const WishList = ({ wishListBooks }) => {

  const RenderWishList = arr => {
    if (arr.length === 0) {
      return (
        <div className="plug">
          <h4>Wishlist is empty</h4>
          <div className="link-to-all d-flex justify-content-center w-100 pt-4">
            <Link to="/">Back to store</Link>
          </div>
        </div>
      )
    } else if ((Object.keys(arr[0]).length === 0)) {
      return <Spinner animation="border" />
    } else {
      return (
        arr.map(({ id, name, images, pricing, stock }) =>
          <WishListItem
            key={id}
            id={id}
            title={name.en}
            image={images[0].url}
            author={name.pt}
            price={pricing.retail}
            stock={stock}
          />)
        )
    }
  }
  return (
    <div id="table-wrap">
      <Container className="table shadow-custom p-4">
        <h4 className="pb-4 mb-0">Wishlist</h4>
          <Row className="mb-3 py-2 bordered-row no-gutters">
            <Col xs={6} className="table-header text-center">Product</Col>
            <Col xs={2} className="table-header text-center">Price</Col>
            <Col xs={2} className="table-header text-center">Stock status</Col>
          </Row>
          { RenderWishList(wishListBooks)}
      </Container>
    </div>
  )
}


const mapStateToProps = state => {
  return {
    wishListBooks: getWishListBooks(state)
  }
}

export default connect(mapStateToProps)(WishList)