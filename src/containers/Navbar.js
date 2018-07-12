import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Navbar extends Component {
	render() {
		return (
			<nav className="navbar">
				<ul>
					<li><Link to="/">home</Link></li>
					<li><Link to="/signin">Sign In</Link></li>
					<li><Link to="/register">Register</Link></li>
				</ul>
			</nav>
		);
	}
}

function mapStateToProps(state) {
	return {
		currentUser: state.user,
	};
}

export default connect(
	mapStateToProps,
	null
)(Navbar);
