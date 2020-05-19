import React from 'react';
import {Link} from 'react-router-dom';
import BooksList from '../../common/Books/BooksList.js';

const CategoryPage = ({title, books, collections, getCollectionId}) =>{
  return(
    <div id="category-page">
      <BooksList
        title={title}
        books={books}
        collectionId={getCollectionId(collections, title)}
        shouldHide={true}
        />
        <div className="link-to-all d-flex justify-content-center w-100 pt-4">
          <Link to="/">Back to store</Link>
        </div>
    </div>
  )
}

export default CategoryPage