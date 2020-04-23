import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CollectionsBanner = () => {
  return(
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
	)
}

export default CollectionsBanner