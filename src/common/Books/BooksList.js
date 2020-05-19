import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import BookItem from './BookItem.js';
import { getBooksArray } from '../../reducers/books';

const BooksList = ({ books, collectionId, quantity, shouldHide, title }) => {
  const itemsToRender = (arr, num) => {
    if (typeof(num) === "number") {
      return num
    } else return arr.length
  }

  return (
    <section className="pt-3">
      <Container>
        <h3 className="text-capitalize text-center text-md-left">{title}</h3>
        <Row>
        {
          books
            .filter(book => {
              for(let i = 0; i <= book.collections.length; i++){
                if(book.collections[i] === collectionId) return true 
              }
              return false
            })
            .slice(0, itemsToRender(books, quantity))
            .map(({id, name, images, pricing})=>
              <Col xs={{span:8, offset:2}} sm={{span:6, offset:0}} lg={3}
                  key={id}
                  className="mb-4"
                >
                <BookItem
                  id={id}
                  title={name.en}
                  image={images[0].url}
                  price={pricing.retail}
                  author={name.pt}
                />    
              </Col>  
            )
          }
          <div className="link-to-all d-flex justify-content-center w-100 pt-md-4">
            <Link to={`/category/${title}`} className={shouldHide ? 'hidden' : ''}>
              See all
            </Link>
          </div>
      </Row>
    </Container>
  </section>
  )
}

const mapStateToProps = (state) => {
  return {
    books: getBooksArray(state.books),
  }
}

export default connect(mapStateToProps)(BooksList)