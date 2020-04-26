import React, {Component}  from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';

class Navbar extends Component{
	render(){
		return(
			<nav id="nav">
				<ul>
					<li><Link to="/category/thrillers">Thrillers</Link></li>
					<li><Link to="/category/fantasy">Fantasy</Link></li>
					<li><Link to="/category/childrens book">Children's books</Link></li>
					<li><Link to="/category/classics">Classics</Link></li>
					<li><Link to="/category/young adult">Young adult</Link></li>
					<li><Link to="/category/fiction">Fiction</Link></li>
				</ul>
			</nav>
		)
	}
}

export default Navbar