import React, {Component}  from 'react';
import Container from 'react-bootstrap/Container';
import BooksList from '../../common/BooksList.js';

class Bestsellers extends Component {

	render(){
		const {getCollectionId, collections, books} = this.props;
		
		return(
			<section className="bestsellers">
				<Container>
					<h3>Bestsellers</h3>
					<BooksList
						collectionId={getCollectionId(collections, "Bestsellers")}
						quantity={4}
						books={books}
					/>
				</Container>
			</section>
		)
	}
}

export default Bestsellers