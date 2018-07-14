import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import Navbar from './Navbar';


const HomePage = ({ currentUser }) => {
  return (
    <div className="homepage">
      <Navbar />
      <p>HomePage</p>
      <p>Hello, {currentUser.username}</p>
    </div>
  );
}


export default HomePage;
