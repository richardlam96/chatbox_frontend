import React from 'react';
import { Route } from 'react-router-dom';


const AuthRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    props.currentUser.isAuthenticated
      ? <Component {...props} />
      : <Redirect to="/signin" />
  )} />
);


export default AuthRoute;
