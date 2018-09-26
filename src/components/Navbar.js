import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signoutUser } from '../store/actions/auth';
import '../styles/Navbar.css';


const Navbar = ({ currentUser, error, logout }) => {
  let links, message;
	if (error.exists) {
		message = error.message;
	}

  if (currentUser.isAuthenticated) {
    links = (
      <div className="navbar-links">
        <Link className="navbar-link" to="/">Home</Link>
        <a className="navbar-link" onClick={logout}>Logout</a>
      </div>
    );
  } else { 
    links = (
      <div className="navbar-links">
        <Link className="navbar-link" to="/signin" id="signin">SignIn</Link>
        <Link className="navbar-link" to="/register" id="register">Register</Link>
      </div>
    );
  }

  return (
    <div className="navbar">
			<div>{message}</div>
      {links}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
		error: state.error,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(signoutUser()),
  };
}


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar));
