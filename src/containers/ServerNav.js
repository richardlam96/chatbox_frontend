import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createUserServer, deleteUserServer } from '../store/actions/server';
import ServerNavComponent from '../components/ServerNavComponent';


const mapStateToProps = state => {
	return { 
		currentUser: state.currentUser,
		servers: state.currentUserServers,
	};
}

const mapDispatchToProps = dispatch => {
	return {
		createServer: (userId, serverName) => dispatch(createUserServer(userId, serverName)),
		deleteServer: (ownerId, serverId) => dispatch(deleteUserServer(ownerId, serverId)),
	};
}


export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps,
)(ServerNavComponent));
