import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

const CartTotal = ({total}) =>{
  return(
    <Container>
      <h6>Cart Total</h6>
      <Row>
        <Col md={{span: 4, offset: 8}}>
        ${total}
        </Col>
      </Row>
     
    </Container>
  )
}

export default CartTotal