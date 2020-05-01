import React, {Component}  from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from './Navbar.js';

import './header.css';

class Header extends Component {
	render() {
		const {cart} = this.props;
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
						<div className="mini-cart d-inline-flex h-100 align-items-center">
							<Link to="/cart" className="mini-cart-link">
								<i className="fa fa-lg fa-shopping-cart" aria-hidden="true"></i>
							</Link>
							<span>{cart.length ? cart.length : "" }</span>
						</div>
					</Col>
				</Row>
			</Container>
		) 
	}
}

const mapStateToProps = (state)=>{
	return{
		cart: state.cart
	}
}
export default connect(mapStateToProps)(Header)
