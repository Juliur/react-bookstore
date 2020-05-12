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

				<Col lg={{span: 3, offset: 2}}>
					<div className="header-icons-wrap h-100 d-flex align-items-center">
						<Link to="/cart" className="header-link d-inline-flex align-items-center mr-3">
							<i className="fa fa-lg fa-shopping-cart mr-2" aria-hidden="true"></i>
							<span>My Cart</span>
							<div className="cart-amount ml-2">{totalAmount}</div>
						</Link>
						<Link to="/wish-list" className="header-link">
							<i className="fa fa-lg fa-heart-o mr-2" aria-hidden="true"></i>
							<span>Wishlist</span>
						</Link>
					</div>
				</Col>
				{/* <Col lg={1} className="d-flex align-items-center justify-content-center">
					
				</Col> */}
			</Row>
		</Container>
	) 
}

const mapStateToProps = (state)=>{
	return{
		totalAmount: getTotalBooksAmount(state.cart),
	}
}
export default connect(mapStateToProps)(Header)
