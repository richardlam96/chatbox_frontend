import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { indexUserServers } from '../store/actions/server';
import { indexUserChannels } from '../store/actions/channel';
import { indexFriends } from '../store/actions/friends';
import { clearCurrentUserFail } from '../store/actions/auth';
import HomePage from '../components/HomePage';


const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    friendsFetching: state.friends.isFetching,
    channelFetching: state.currentServerChannels.isFetching,
    serverFetching: state.currentUserServers.isFetching,
  };
}

const mapDispatchToProps = dispatch => {
  return {
		indexServers: (userId) => dispatch(indexUserServers(userId)),
		indexChannels: (userId) => dispatch(indexUserChannels(userId)),
    indexFriends: (userId) => dispatch(indexFriends(userId)),
    clearError: () => dispatch(clearCurrentUserFail()),
	};
}


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage));
