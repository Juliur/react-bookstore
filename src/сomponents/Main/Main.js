import React, {Component}  from 'react';
import {connect} from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import {fetchBooks} from '../../actions/index.js';
import './main.css';

class Main extends Component{
	
	componentDidMount() {
		this.props.fetchBooks();
	}

	render(){
		return(
			<main className="main">
				<section className="collections pt-5">
					<Container>
						<Row>
							<Col>
								<div className="jumbotron">
						  		<h1 className="display-4 text-uppercase">Collection</h1>
		    					<a className="btn btn-primary main-color" href="#" role="button">Learn more</a>
								</div>
							</Col>
						</Row>
					</Container>
				</section>
				<section className="bestsellers">
					<Container>
						<h3>Best Sellers</h3>
						<Row>
							<Col md={3}>
								<Card className="p-1">
									<Card.Img variant="top" src="./the-silent-patient.jpg" alt="..."/>
									<Card.Body>
										<Card.Title>Card Title</Card.Title>
										<a href="#" className="btn btn-secondary text-uppercase p-2 font-weight-bold">Add to cart</a>
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</Container>
				</section>
			</main>
		)
	}
}

const mapDispatchToProps = {
	fetchBooks
}

export default connect(null, mapDispatchToProps)(Main)