import React, {Component}  from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {fetchBooks, fetchCollections} from '../../actions/index.js';
import './main.css';
import HomePage from './HomePage.js';
import CategoryPage from './CategoryPage.js';


class Main extends Component{
	
	componentDidMount() {
		this.props.fetchBooks();
		this.props.fetchCollections();
	}

	getCollectionId(arr, search){
		let collectionId;
			arr.map(function(item){
				for(let key in item){
					if(key === "name" && item[key].en.toLowerCase() === search){
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
				<Switch>
					<Route 	path="/home" 
									exact 
									render={()=> <HomePage 
																collections={collections} 
																books={books} 
																getCollectionId={this.getCollectionId} />}/>
					<Route 	path="/category/:title" 
									render={(props)=><CategoryPage
																			books={books}
																			collections={collections} 
																			title={props.match.params.title}
																			getCollectionId={this.getCollectionId} />}/>
				</Switch>
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