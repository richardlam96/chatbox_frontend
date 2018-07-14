import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signoutUser } from '../store/actions/auth';


const Navbar = ({ currentUser, logout }) => {
  let links;
  if (currentUser.isAuthenticated) {
    links = (
      <ul>
        <li><Link to="/welcome">Home</Link></li>
        <li><button onClick={logout}>Logout</button></li>
      </ul>
    );
  } else { 
    links = (
      <ul>
        <li><Link to="/">Launch</Link></li>
        <li><Link to="/signin">SignIn</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    );
  }

  return (
    <div className="navbar">
      <hr />
      <p>Navbar</p>
      {links}
      <hr />
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
