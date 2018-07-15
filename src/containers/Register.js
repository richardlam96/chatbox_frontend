import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { handleAuth, clearCurrentUserFail } from '../store/actions/auth';
import AuthPage from '../components/AuthPage';


const mapStateToProps = state => {
	return {
		currentUser: state.currentUser,
    authMode: 'register',
    error: state.error,
	};
}

const mapDispatchToProps = dispatch => {
	return {
		submitCred: (mode, cred) => dispatch(handleAuth(mode, cred)),
    clearError: () => dispatch(clearCurrentUserFail()),
	};
}


export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(AuthPage));
