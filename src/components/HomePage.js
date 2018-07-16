import React from 'react';
import Navbar from './Navbar';
import '../styles/HomePage.css';


const HomePage = ({ currentUser }) => {
  return (
    <div className="homepage">
      <Navbar />
      <p>HomePage</p>
    </div>
  );
}


export default HomePage;
