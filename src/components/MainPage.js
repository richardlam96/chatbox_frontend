import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LaunchPage from './LaunchPage';
import Auth from '../containers/Auth';

import Blank from '../components/Blank';


const MainPage = ({ currentUser }) => {
	if (currentUser.isAuthenticated) {
		return (
			<Route exact path="/user/:userId" render={Blank} />
		);
	}

	return (
		<div className="main">
			<Switch>
				<Route exact path="/" render={LaunchPage} />
				<Route exact path="/:authMode" render={Auth} />
			</Switch>
		</div>
	);
}


export default MainPage;
