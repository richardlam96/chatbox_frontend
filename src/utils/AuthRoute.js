import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Route, Redirect } from 'react-router-dom';


const AuthRoute = ({ component: Component, loggedIn, exact, path }) => (
  <Route 
    exact={exact}
    path={path}
    render={props => (
      loggedIn
        ? <Component {...props} />
        : <Redirect to="/signin" />
    )} 
  />
);

const mapStateToProps = state => {
  return {
    loggedIn: state.currentUser.isAuthenticated,
  };
}


export default withRouter(connect(
  mapStateToProps,
  null
)(AuthRoute));
