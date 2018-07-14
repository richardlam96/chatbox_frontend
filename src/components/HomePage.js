import React from 'react';
import Navbar from './Navbar';


const HomePage = ({ currentUser }) => {
  return (
    <div className="homepage">
      <Navbar />
      <p>HomePage</p>
    </div>
  );
}


export default HomePage;
