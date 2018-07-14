import React from 'react';
import { Link } from 'react-router-dom';


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

export default Navbar;
