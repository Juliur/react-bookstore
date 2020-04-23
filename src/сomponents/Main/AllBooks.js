import React, {Component}  from 'react';
import Container from 'react-bootstrap/Container';
import BooksList from '../../common/BooksList.js';

const AllBooks =() =>{
 return(
    <section>
        <Container>
            <h3>All Books</h3>
            <BooksList/>
        </Container>
    </section>
 )
}

export default AllBooks