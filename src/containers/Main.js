import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';
import { registerUser } from '../store/actions/auth';


const Main = props => {
	return ( 
		<div className="main">
			<Switch>
				<Route 
					exact
					path="/"
					render={props => <Homepage {...props} />}
				/>
				<Route
					exact
					path="/signin"
					render={props => <AuthForm onRegister={registerUser} text="Sign in" {...props} />}
				/>
				<Route
					exact
					path="/register"
					render={props => <AuthForm onRegister={registerUser} register text="Register" {...props} />}
				/>
			</Switch>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		currentUser: state.user,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		registerUser: dispatch(registerUser),
	};
}

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Main));
