import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ControlPaneComponent from '../components/ControlPaneComponent';

import { 
	indexUserChannels,
	createServerChannel, 
	deleteServerChannel,
} from '../store/actions/channel';
import { indexUserServers } from '../store/actions/server';


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
		indexChannels: (userId, serverId) => {
			return dispatch(indexUserChannels(userId, serverId));
		},
	};
}


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlPaneComponent));
