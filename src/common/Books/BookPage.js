import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Image from 'react-bootstrap/Image'
import {getBook} from '../../reducers/books';
import Buttons from '../Buttons, Inputs/Buttons';
import './bookPage.css';

class BookPage extends Component {

  renderBook = () =>{
    const {
      book, 
    } = this.props;

    if(!book) return  <Spinner animation="border" /> ;
    return <div>
      <Row className="no-gutters">
        <Col xs={12} sm={6} md={4}>
          <Image src={book['images'][0].url} className="w-100" fluid/>
        </Col>
        <Col xs={12} sm={6} md={6}>
          <div className="book-info pl-md-3 pt-3 d-flex flex-column">
            <h3>{book['name']['en']}</h3>
            <p>{book['description']['en']}</p>
            <div className="d-inline-flex justify-content-between w-100">
              <Buttons.AddToWishListBtn
                id={book['id']}
                type={"simple"}
              />
              <p className="price">${book['pricing']['retail']}</p>
            </div>
            <Buttons.AddToCartBtn
              id={book['id']}
            />
          </div>
        </Col>
      </Row>
    </div>
    }
  

  render(){
    return(
      <div>
        <div id="book-page" className="py-3">
          <Container fluid>
            <Row>
              <Col md={{ span: 10, offset: 1 }}>
                {this.renderBook()}
              </Col>
            </Row>
          </Container>
        </div>
        <div className="link-to-all d-flex justify-content-center w-100 pt-4">
          <Link to="/">Back to store</Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
	return{
    book: getBook(state.books, ownProps.id),
	}
}


export default connect(
  mapStateToProps,
)(BookPage)