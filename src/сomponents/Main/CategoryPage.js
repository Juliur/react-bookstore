import React from 'react';
import BooksList from '../../common/BooksList.js';

const CategoryPage = ({title, books, collections, getCollectionId}) =>{
  return(
    <div id="category-page">
      <BooksList
        title={title}
        books={books}
        collectionId={getCollectionId(collections, title)}
        shouldHide={true}
        />
    </div>
  )
}

export default CategoryPage