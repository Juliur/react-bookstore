import React, {Component}  from 'react';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import BooksList from '../../common/BooksList.js';

class Bestsellers extends Component {

	render(){
		const {getCollectionId, collections, books, quantity} = this.props;
		
		return(
			<section className="bestsellers">
				<Container>
					<h3>Bestsellers</h3>
					<BooksList
						collectionId={getCollectionId(collections, "Bestsellers")}
						quantity={quantity}
						books={books}
					/>
					<Link to="/bestsellers">See all</Link>
				</Container>
			</section>
		)
	}
}

export default Bestsellers