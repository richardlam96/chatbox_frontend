import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LaunchPage from './LaunchPage';
import Auth from '../containers/Auth';

import Blank from '../components/Blank';


const MainPage = ({ currentUser }) => {
	console.log(currentUser);

	return (
		<div className="main">
			<Switch>
				<Route exact path="/" render={LaunchPage} />
				<Route exact path="/:authMode" render={Auth} />
				<Route exact path="/welcome/user" render={Blank} />
			</Switch>
		</div>
	);
}


export default MainPage;
