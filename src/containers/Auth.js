import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import handleAuth from '../store/actions/auth';
import AuthPage from '../components/AuthPage';


const mapStateToProps = state => {
	return {
		currentUser: state.currentUser,
	};
}

const mapDispatchToProps = dispatch => {
	return {
		dispatch,
		handleAuth,
	};
}

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(AuthPage));
