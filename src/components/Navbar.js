import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signoutUser } from '../store/actions/auth';
import '../styles/Navbar.css';


const Navbar = ({ currentUser, logout }) => {
  let links;
  if (currentUser.isAuthenticated) {
    links = (
      <div className="navbar-links">
        <Link className="navbar-link" to="/home">Home</Link>
        <button className="navbar-link" onClick={logout}>Logout</button>
      </div>
    );
  } else { 
    links = (
      <div className="navbar-links">
        <Link className="navbar-link" to="/signin">SignIn</Link>
        <Link className="navbar-link" to="/register">Register</Link>
      </div>
    );
  }

  return (
    <div className="navbar">
      <Link className="navbar-logo navbar-link" to="/">DROCSID</Link>
      {links}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
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
