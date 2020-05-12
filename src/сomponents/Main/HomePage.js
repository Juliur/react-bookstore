import React from 'react';
import CollectionsBanner from './BannerSection/CollectionsBanner.js';
import BooksList from '../../common/Books/BooksList.js';

const HomePage = ({collections, books, getCollectionId}) =>{
  return(
    <div id="home-page">
      <CollectionsBanner
					getCollectionId={getCollectionId}
					collections={collections}
				/>
				<BooksList
          title={"bestsellers"}
          collections={collections}
          collectionId={getCollectionId(collections, "bestsellers")}
          books={books}
          quantity={4}
				/>
        <BooksList
          title={"all books"}
          books={books}
        />
    </div>
  )
}

export default HomePage