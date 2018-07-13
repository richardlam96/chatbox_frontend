import React from 'react';
import { Route, Link } from 'react-router-dom';
import AuthContainer from '../containers/AuthContainer';


const Homepage = props => {
	const showLaunchPage = () => {
		return (
			<div className="homepage">
				<Route
					path="/"
					render={() => <AuthContainer />}
				/>
			</div>
		);
	
	}
	
	const showUserHome = () => {
		return (
			<div>You logged in! Redirect or Route to UserHome</div>
		);
	}

	if (props.user) {
		return showUserHome();
	} else {
		return showLaunchPage();
	}

}

export default Homepage;
