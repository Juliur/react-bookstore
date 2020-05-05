import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from './Navbar.js';
import {getTotalBooksAmount} from '../../reducers/rootReducer';

import './header.css';

const Header = ({totalAmount}) =>{
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
					<div className="mini-cart h-100 d-flex">
						<Link to="/cart" className="mini-cart-link d-inline-flex align-items-center">
							<i className="fa fa-lg fa-shopping-cart" aria-hidden="true"></i>
							<div className="cart-amount ml-2">{totalAmount}</div>
						</Link>
					</div>
				</Col>
			</Row>
		</Container>
	) 
}

const mapStateToProps = (state)=>{
	return{
		totalAmount: getTotalBooksAmount(state.cart)
	}
}
export default connect(mapStateToProps)(Header)
