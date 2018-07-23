import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createUserServer, deleteUserServer } from '../store/actions/server';
import { indexUserServers } from '../store/actions/server';
import { indexServerChannels } from '../store/actions/channel';

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
		indexServers: (userId) => dispatch(indexUserServers(userId)),
		createServer: (userId, serverName) => dispatch(createUserServer(userId, serverName)),
		deleteServer: (userId, serverId) => dispatch(deleteUserServer(userId, serverId)),
	};
}


export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps,
)(ServerNavComponent));
