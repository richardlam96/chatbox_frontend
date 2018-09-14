import React from 'react';
import { Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/LaunchPage.css';


const LaunchPage = ({ currentUser }) => {
	// Redirect if user is already logged in.
	if (currentUser.isAuthenticated) {
		return <Redirect to="/activity" />;
	}
	
	return (
		<div className="launchpage">
			<Navbar />
			<div className="intro">
				<div className="logo">
					<i className="fa fa-gamepad fa-2x" aria-hidden="true"></i><span>CHATBOX</span>
				</div>
			</div>
		</div>
	);
}

export default LaunchPage;

