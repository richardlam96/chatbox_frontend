import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => (
	<div className="navbar">
		<hr />
		<p>Navbar</p>
		<ul>
			<li><Link to="/">Home</Link></li>
			<li><Link to="/signin">SignIn</Link></li>
			<li><Link to="/register">Register</Link></li>
		</ul>
		<hr />
	</div>
);


export default Navbar;
