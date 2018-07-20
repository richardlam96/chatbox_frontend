import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MainContentComponent from '../components/MainContentComponent';

import { indexChannelMessages } from '../store/actions/message';


const mapStateToProps = state => {
	return {
		currentUser: state.currentUser,
		messagesById: state.channelMessages.messagesById,
		messageIds: state.channelMessages.messageIds,
	};
}

const mapDispatchToProps = dispatch => {
	return {
		indexMessages: (userId, channelId) => dispatch(indexChannelMessages(userId, channelId)),
	};
}


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContentComponent));
