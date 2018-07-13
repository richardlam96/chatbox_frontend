import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleAuth } from '../store/actions/auth';
import AuthForm from '../components/AuthForm';


const mapStateToProps = state => {
	var link;
	if (state.isAuthenicated) {
		link = <Link to="/register">Register</Link>;
	} else {
		link = <Link to="/signin">Sign In</Link>;
	}
	return {
		alternateLink: link,
	};
}

const mapDispatchToProps = dispatch => {
	return {
		handleAuth: dispatch(handleAuth)
	};
}


export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(AuthForm);
