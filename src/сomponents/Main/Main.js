import React, {Component}  from 'react';
import {connect} from 'react-redux';
import {fetchBooks} from '../../actions/index.js';
import CollectionsBanner from './CollectionsBanner.js';
import Bestsellers from './Bestellers.js';
import AllBooks from './AllBooks.js';
import './main.css';

class Main extends Component{
	
	componentDidMount() {
		this.props.fetchBooks();
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
		return(
			<main className="main">
				<CollectionsBanner/>
				<Bestsellers
					getCollectionId={this.getCollectionId}
				/>
				<AllBooks/>
			</main>
		)
	}
}

const mapDispatchToProps = {
	fetchBooks
}

export default connect(null, mapDispatchToProps)(Main)