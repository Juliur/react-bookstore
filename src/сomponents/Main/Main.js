import React, {Component}  from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import {fetchBooks, fetchCollections} from '../../actions/index.js';
import './main.css';
import HomePage from './HomePage.js';
import AllBooks from './AllBooks.js';
import Bestsellers from './Bestellers.js';

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
			<main id="main">
				<Route path="/home" exact render={()=> 
					<HomePage 
						collections={collections} 
						books={books}
						getCollectionId={this.getCollectionId} />}/>
				<Route path="/all-books" render={()=><AllBooks books={books}/>}/>
				<Route path="/bestsellers" render={()=><Bestsellers books={books} collections={collections} quantity={"all"} getCollectionId={this.getCollectionId}/>}/>
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