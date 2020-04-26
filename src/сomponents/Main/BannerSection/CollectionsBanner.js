import React, {Component} from 'react';
import CollectionsBannerList from './CollectionsBannerList.js';
import './banner.css';

class CollectionsBanner extends Component {
	render(){
		const {getCollectionId, collections} = this.props;
	
		return(
			<section className="pt-5">
				<CollectionsBannerList
					title={"the best books of 2019"}
					collections = {collections}
					collectionId={getCollectionId(collections, "the best books of 2019")}
				/>
			</section>
		)
	}
}

export default CollectionsBanner