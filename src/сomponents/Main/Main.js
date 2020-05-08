import React, {Component}  from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import HomePage from './HomePage.js';
import CategoryPage from './CategoryPage.js';
import CartPage from '../CartPage/CartPage.js';
import BookPage from '../../common/Books/BookPage.js';
import './main.css';
import LikedBooks from './LikedBooks.js';

class Main extends Component{

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
					<Route 	
						path="/home" 
						exact 
						render={()=> <HomePage 
														collections={collections} 
														books={books} 
														getCollectionId={this.getCollectionId} 
													/>}
					/>
					<Route 	
						path="/category/:title" 
						render={(props)=><CategoryPage
																books={books}
																collections={collections} 
																title={props.match.params.title}
																getCollectionId={this.getCollectionId} />
										}
					/>
					<Route 
						path="/cart" 
						component={CartPage}
					/>
					<Route 
						path="/book/:id/:title"
						render={(props)=><BookPage
																id={props.match.params.id}
																title={props.match.params.title}	
														/>}
					/>
					<Route path="/liked" component={LikedBooks} />
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

export default connect(mapStateToProprs)(Main)