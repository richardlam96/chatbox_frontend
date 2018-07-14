import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const AuthRoute = ({ component: Component, exact, currentUser, path }) => (
  <Route 
    exact={exact} 
    path={path} 
    render={props => (
      currentUser.isAuthenticated
        ? <Component {...props} />
        : <Redirect to="/signin" />
    )} 
  />
);


export default AuthRoute;
