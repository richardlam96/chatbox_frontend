import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createServerChannel } from '../store/actions/channel';
import ControlPaneComponent from '../components/ControlPaneComponent';


const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
		channelsById: state.currentServerChannels.channelsById,
		channelIds: state.currentServerChannels.channelIds,
		state,
  };
}

const mapDispatchToProps = dispatch => {
  return {
		createChannel: (userId, serverId, name) => {
			return dispatch(createServerChannel(userId, serverId, name));
		}
	};
}


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlPaneComponent));
