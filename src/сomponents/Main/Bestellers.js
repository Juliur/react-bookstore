import React, {Component}  from 'react';
import {connect} from 'react-redux';
import Container from 'react-bootstrap/Container';
import BooksList from '../../common/BooksList.js';
import {fetchCollections} from '../../actions/index.js';

class Bestsellers extends Component {

	componentDidMount() {
		this.props.fetchCollections();
	}

	render(){
		const {getCollectionId, collections} = this.props;
		return(
			<section className="bestsellers">
				<Container>
					<h3>Bestsellers</h3>
					<BooksList
						collectionId={getCollectionId(collections, "Bestsellers")}
					/>
				</Container>
			</section>
		)
	}
}
const mapStateToProps = (state) =>{
	return {
		collections : state.collections
	}
}

const mapDispatchToProps = {
	fetchCollections
}

export default connect(mapStateToProps, mapDispatchToProps)(Bestsellers)