import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import Nav from '../containers/Nav';


const HomePage = ({ currentUser }) => {
  if (currentUser.isAuthenticated) {
    console.log('already logged in.');
    console.log(currentUser);
    return (
      <div className="blank">
        <Nav />
        <p>HomePage</p>
        <p>Hello, {currentUser.username}</p>
        <Link to="/">Return to Launch</Link>
      </div>
    );
  } else {
    console.log('not logged in');
    return <Redirect to="/signin" />;
  }
}


export default HomePage;
