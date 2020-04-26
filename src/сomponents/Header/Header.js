import React, {Component}  from 'react';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from './Navbar.js';

import './header.css';

class Header extends Component {
	render() {
		return (
			<Container fluid className="header-container main-color py-2" fixed="top">
				<Row>
					<Col lg={5}>
						<div className="nav-icon">
							<input type="checkbox" id="nav-toggle" hidden/>
							<label htmlFor="nav-toggle" className="nav-toggle font-weight-bold">
								<span className="hidden-sm visible-md">All categories</span>
							</label>
							<Navbar/>
						</div>
					</Col>

					<Col lg={2}>
						<div className="brand">
							<Link to="/home">BookStore</Link>
						</div>
					</Col>

					<Col lg={5}>
						<div className="mini-cart d-inline-block">
							<a href="#" className="mini-cart-link">
								<i className="fa fa-shopping-cart" aria-hidden="true"></i>
							</a>
						</div>
					</Col>
				</Row>
			</Container>
		) 
	}
}


export default Header
