import React from 'react';
import CollectionsBanner from './BannerSection/CollectionsBanner.js';
import Bestsellers from './Bestellers.js';
import AllBooks from './AllBooks.js';

const HomePage = ({collections, books, getCollectionId}) =>{
  return(
    <div id="home-page">
      <CollectionsBanner
					getCollectionId={getCollectionId}
					collections={collections}
				/>
				<Bestsellers
					getCollectionId={getCollectionId}
					collections={collections}
          books={books}
          quantity={4}
				/>
				<AllBooks
					books={books}
				/>
    </div>
  )
}

export default HomePage