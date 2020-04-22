import React, {Component}  from 'react';

class Navbar extends Component{
	render(){
		return(
			<nav className="nav">
				<ul>
					<li><a href="#1">Thrillers</a></li>
					<li><a href="#2">Fantasy</a></li>
					<li><a href="#3">Children's books</a></li>
					<li><a href="#3">Classics</a></li>
					<li><a href="#3">Young adult</a></li>
					<li><a href="#3">Fiction</a></li>
				</ul>
			</nav>
		)
	}
}

export default Navbar