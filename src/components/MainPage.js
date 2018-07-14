import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LaunchPage from './LaunchPage';
import AuthRoute from '../utils/AuthRoute';

import Blank from '../components/Blank';


const MainPage = ({ currentUser }) => {
	console.log(currentUser);

	return (
		<div className="main">
			<Switch>
				<Route exact path="/" render={LaunchPage} />
				<Route exact path="/:authMode" render={Auth} />
				<AuthRoute exact path="/welcome/user" component={Blank} />
			</Switch>
		</div>
	);
}


export default MainPage;
