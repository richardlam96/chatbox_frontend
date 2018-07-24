import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ChatboxComponent from '../components/ChatboxComponent';

import { indexChannelMessages, createChannelMessage } from '../store/actions/message';


const mapStateToProps = state => {
	return {
		currentUser: state.currentUser,
		channelsById: state.currentServerChannels.channelsById,
		messagesById: state.channelMessages.messagesById,
	};
}

const mapDispatchToProps = dispatch => {
	return {
		createMessage: (userId, serverId, channelId, text) => {
			return dispatch(createChannelMessage(userId, serverId, channelId, text));
		},
		indexMessages: (userId, serverId, channelId) => {
			return dispatch(indexChannelMessages(userId, serverId, channelId));
		},
	};
}


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatboxComponent));
