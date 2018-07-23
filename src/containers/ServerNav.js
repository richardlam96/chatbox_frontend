import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createUserServer, deleteUserServer } from '../store/actions/server';

import ServerNavComponent from '../components/ServerNavComponent';


const mapStateToProps = state => {
	return { 
		currentUser: state.currentUser,
		serversById: state.currentUserServers.serversById,
		serverIds: state.currentUserServers.serverIds,
	};
}

const mapDispatchToProps = dispatch => {
	return {
		createServer: (userId, serverName) => dispatch(createUserServer(userId, serverName)),
		deleteServer: (userId, serverId) => dispatch(deleteUserServer(userId, serverId)),
	};
}


export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps,
)(ServerNavComponent));
