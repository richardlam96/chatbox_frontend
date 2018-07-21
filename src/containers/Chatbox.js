import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ChatboxComponent from '../components/ChatboxComponent';

import { indexChannelMessages, createChannelMessage } from '../store/actions/message';


const mapStateToProps = state => {
	return {
		currentUser: state.currentUser,
    serversById: state.currentUserServers.serversById,
    serverIds: state.currentUserServers.serverIds,
		channelsById: state.currentServerChannels.channelsById,
		channelIds: state.currentServerChannels.channelIds,
		messagesById: state.channelMessages.messagesById,
		messageIds: state.channelMessages.messageIds,
	};
}

const mapDispatchToProps = dispatch => {
	return {
		createMessage: (userId, channelId, text) => {
			return dispatch(createChannelMessage(userId, channelId, text));
		},
		indexMessages: (userId, channelId) => dispatch(indexChannelMessages(userId, channelId)),
	};
}


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatboxComponent));
