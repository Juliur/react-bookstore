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
				<Col xs={2} sm={3} md={4}>
					<div className="nav-icon">
						<input type="checkbox" id="nav-toggle" hidden/>
						<label htmlFor="nav-toggle" className="nav-toggle font-weight-bold mb-0">
							<span className="ml-2 text-uppercase">All categories</span>
						</label>
						<Navbar/>
					</div>
				</Col>

				<Col xs={{span:4, offset:2}} sm={{span:6, offset:0}} md={4}>
					<div className="brand">
						<Link to="/">BookStore</Link>
					</div>
				</Col>

				<Col xs={4} sm={{span:3, offset: 0}} md={4}>
					<div className="header-icons-wrap h-100 d-flex align-items-center justify-content-end">
						<Link to="/cart" className="header-link d-inline-flex align-items-center mr-3">
							<i className="fa fa-shopping-cart mr-2" aria-hidden="true"></i>
							<span className="d-none d-md-inline-block mr-2">My Cart</span>
							<p className="cart-amount mb-0">{totalAmount}</p>
						</Link>
						<Link to="/wish-list" className="header-link">
							<i className="fa fa-heart-o mr-2" aria-hidden="true"></i>
							<span className="d-none d-md-inline-block">Wishlist</span>
						</Link>
					</div>
				</Col>
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
