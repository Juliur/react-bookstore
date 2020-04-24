import React, {Component} from 'react';
import CollectionsBannerList from './CollectionsBannerList.js';
import './banner.css';

class CollectionsBanner extends Component {
	render(){
		const {getCollectionId, collections} = this.props;
	
		return(
			<section className="pt-5">
				<CollectionsBannerList
					collections = {collections}
					collectionId={getCollectionId(collections, "The Best Books of 2019")}
				/>
			</section>
		)
	}
}

export default CollectionsBanner