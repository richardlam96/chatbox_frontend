import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Auth from '../containers/Auth';
import AuthRoute from '../utils/AuthRoute';
import HomePage from './HomePage';

import Blank from '../containers/Blank';


const MainPage = ({ currentUser }) => {
	console.log(currentUser);

  let authPage;
  if (!currentUser.isAuthenticated) {
    authPage = <Route exact path="/:authMode" render={Auth} />
  }

	return (
		<div className="main">
      <Switch>
        {authPage}
        <AuthRoute 
          exact path="/" 
          currentUser={currentUser}
          component={Blank}
        />
        <AuthRoute 
          exact path="/welcome" 
          currentUser={currentUser}
          component={HomePage}
        />

      </Switch>
		</div>
	);
}


export default MainPage;
