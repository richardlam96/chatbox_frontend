import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createUserServer } from '../store/actions/server';

import ServerFormModal from '../components/ServerFormModal';


const mapStateToProps = state => {
	return { 
		currentUser: state.currentUser,
	};
}

const mapDispatchToProps = dispatch => {
	return {
		createServer: (userId, serverName) => dispatch(createUserServer(userId, serverName)),
	};
}


export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps,
)(ServerFormModal));
