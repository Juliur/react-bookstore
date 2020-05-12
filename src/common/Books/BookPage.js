import React, {Component} from 'react';
import {connect} from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import {fetchBookById} from '../../actions/index';
import {getBook} from '../../reducers/books';
import Buttons from '../Buttons, Inputs/Buttons';
import './bookPage.css';

class BookPage extends Component {

  componentDidMount(){
    this.props.fetchBookById(this.props.id);
  }

  renderBook = () =>{
    const {
      book, 
    } = this.props;

    if(!book) return "loading";
    return <div>
      <Row className="no-gutters">
        <Col md={4}>
          <Image src={`http://${book['images'][0].url}`} className="w-100" fluid/>
        </Col>
        <Col md={6}>
          <div className="book-info pl-3">
            <h3>{book['name']['en']}</h3>
            <p>{book['description']['en']}</p> 
            <p className="price">${book['pricing']['retail']}</p>
              <Buttons.AddToCartBtn
                id={book['id']}
              />
              <Buttons.AddToWishListBtn
                id={book['id']}
                type={"simple"}
              />
          </div>
        </Col>
      </Row>
    </div>
    }
  

  render(){
    return(
      <div id="book-page" className="pt-3">
        <Container fluid>
          <Row>
            <Col md={{ span: 10, offset: 1 }}>
              {this.renderBook()}
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
	return{
    book: getBook(state.books, ownProps.id),
    isLiked: state.wishList.includes(ownProps.id)
	}
}

const mapDispatchToProps = {
  fetchBookById,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookPage)