import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { sendFriendRequest } from '../store/actions/friends';
import FriendsNavComponent from '../components/FriendsNavComponent';


const mapStateToProps = state => {
	return {
		currentUser: state.currentUser,
	};
}

const mapDispatchToProps = dispatch => {
	return {
		sendFriendRequest: (userId, friendId) => dispatch(sendFriendRequest(userId, friendId)),
	};
}


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsNavComponent));
