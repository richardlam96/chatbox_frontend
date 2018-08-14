import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addFriend } from '../store/actions/user';
import FriendsNavComponent from '../components/FriendsNavComponent';


const mapStateToProps = state => {
	return {
		currentUser: state.currentUser,
	};
}

const mapDispatchToProps = dispatch => {
	return {
		addFriend: (userId, friendId) => dispatch(addFriend(userId, friendId)),
	};
}


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsNavComponent));
