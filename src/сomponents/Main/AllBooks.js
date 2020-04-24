import React from 'react';
import {Link} from 'react-router-dom';
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
            <Link to="all-books">See all</Link>
        </Container>
    </section>
 )
}

export default AllBooks