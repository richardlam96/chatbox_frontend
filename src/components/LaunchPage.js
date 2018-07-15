import React from 'react';
import Navbar from './Navbar';
import '../styles/LaunchPage.css';


const LaunchPage = () => (
	<div className="launchpage">
		<Navbar />
    <div className="intro">
      <div className="logo">
        <i class="fa fa-gamepad fa-2x" aria-hidden="true"></i><span>DROCSID</span>
      </div>
    </div>
	</div>
);


export default LaunchPage;

