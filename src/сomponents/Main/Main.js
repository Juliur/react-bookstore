import React, {Component}  from 'react';
import {connect} from 'react-redux';
import {fetchBooks, fetchCollections} from '../../actions/index.js';
import CollectionsBanner from './BannerSection/CollectionsBanner.js';
import Bestsellers from './Bestellers.js';
import AllBooks from './AllBooks.js';
import './main.css';

class Main extends Component{
	
	componentDidMount() {
		this.props.fetchBooks();
		this.props.fetchCollections();
	}

	getCollectionId(arr, search){
		let collectionId;
			arr.map(function(item){
				for(let key in item){
					if(key === "name" && item[key].en === search){
						findId(item);
						break;
					}
					function findId(item){
						for(let key in item){
						if(key === "id"){
							collectionId = item[key]
						}
					}
				}
			}
		})
		return collectionId
	}

	render(){
		const {books, collections} = this.props;
		return(
			<main className="main">
				<CollectionsBanner
					getCollectionId={this.getCollectionId}
					collections={collections}
				/>
				<Bestsellers
					getCollectionId={this.getCollectionId}
					collections={collections}
					books={books}
				/>
				<AllBooks
					books={books}
				/>
			</main>
		)
	}
}
const mapStateToProprs = (state) => {
	return {
		books: state.books,
		collections: state.collections,
	}
}

const mapDispatchToProps = {
	fetchBooks,
	fetchCollections,
}

export default connect(mapStateToProprs, mapDispatchToProps)(Main)