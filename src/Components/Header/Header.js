import React, {Component}  from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './header.css';

class Header extends Component {
	render() {
		return (
			<div>
				<Container fluid className="main-color">
					<Row>
						<Col lg={5}>
							<div className="nav-icon">
								<input type="checkbox" id="nav-toggle" hidden/>
								<label htmlFor="nav-toggle" className="nav-toggle font-weight-bold">
									<span className="hidden-sm visible-md">All categories</span>
								</label>
								<nav className="nav">
									<ul>
										<li><a href="#1">Thrillers</a></li>
										<li><a href="#2">Fantasy</a></li>
										<li><a href="#3">Children's books</a></li>
									</ul>
								</nav>
							</div>
						</Col>

						<Col lg={2}>
							<div className="brand">
								<a href="#">BookStore</a>
							</div>
						</Col>

						<Col lg={5}>
							<div className="mini-cart d-inline-block">
								<a href="#" className="mini-cart-link"></a>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		) 
	}
}


export default Header
