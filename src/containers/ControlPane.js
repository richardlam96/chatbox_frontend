import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createServerChannel } from '../store/actions/channel';
import { indexUserServers } from '../store/actions/server';
import ControlPaneComponent from '../components/ControlPaneComponent';


const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    serversById: state.currentUserServers.serversById,
		channelsById: state.currentServerChannels.channelsById,
		channelIds: state.currentServerChannels.channelIds,
		state,
  };
}

const mapDispatchToProps = dispatch => {
  return {
		createChannel: (userId, serverId, name) => {
			return dispatch(createServerChannel(userId, serverId, name));
		},
		indexServers: (userId) => dispatch(indexUserServers(userId)),
	};
}


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlPaneComponent));
