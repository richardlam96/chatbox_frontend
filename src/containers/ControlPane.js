import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { indexChannelMessages } from '../store/actions/message';
import { deleteUserServer } from '../store/actions/server';
import { signoutUser } from '../store/actions/auth';

import ControlPaneComponent from '../components/ControlPaneComponent';

import { 
	createServerChannel, 
	deleteServerChannel,
} from '../store/actions/channel';


const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    serversById: state.currentUserServers.serversById,
		channelsById: state.currentServerChannels.channelsById,
		channelIds: state.currentServerChannels.channelIds,
  };
}

const mapDispatchToProps = dispatch => {
  return {
		createChannel: (userId, serverId, name) => {
			return dispatch(createServerChannel(userId, serverId, name));
		},
    deleteChannel: (userId, serverId, channelId) => {
      return dispatch(deleteServerChannel(userId, serverId, channelId));
    },
		indexMessages: (userId, serverId, channelId) => {
			return dispatch(indexChannelMessages(userId, serverId, channelId));
		},
		deleteServer: (userId, serverId) => dispatch(deleteUserServer(userId, serverId)),
    logout: () => dispatch(signoutUser()),
	};
}


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlPaneComponent));
