import React, {Component}  from 'react';
import Container from 'react-bootstrap/Container';
import BooksList from '../../common/BooksList.js';

const AllBooks =({books}) =>{
 return(
    <section>
        <Container>
            <h3>All Books</h3>
            <BooksList
                books={books}
            />
        </Container>
    </section>
 )
}

export default AllBooks