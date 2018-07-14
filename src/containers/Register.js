import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { handleAuth } from '../store/actions/auth';
import AuthPage from '../components/AuthPage';


const mapStateToProps = state => {
	return {
		currentUser: state.currentUser,
    authMode: 'register',
	};
}

const mapDispatchToProps = dispatch => {
	return {
		submitCred: (mode, cred) => dispatch(handleAuth(mode, cred)),
	};
}

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(AuthPage));
