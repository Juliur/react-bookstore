import React from 'react';
import CollectionsBanner from './BannerSection/CollectionsBanner.js';
import BooksList from '../../common/BooksList.js';

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
          books={books}
          quantity={4}
				/>
    </div>
  )
}

export default HomePage