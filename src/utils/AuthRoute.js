import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const AuthRoute = ({ component: Component, currentUser, ...rest }) => (
  <Route {...rest} render={props => (
    currentUser.isAuthenticated
      ? <Component {...props} />
      : <Redirect to="/signin" />
  )} />
);


export default AuthRoute;
