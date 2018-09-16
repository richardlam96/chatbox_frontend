import { apiCall } from '../../services/api';
import {
	INDEX_FRIENDS_SUCCESS,
	ACCEPT_FRIEND_REQUEST_SUCCESS,
	SEND_FRIEND_REQUEST_SUCCESS,
} from '../actionTypes';


export function indexFriendsSuccess(friends) {
	return {
		type: INDEX_FRIENDS_SUCCESS,
		friends,
	};
}

export function indexFriendsFailure(error) {
}

export function indexFriends(userId) {
	return dispatch => {
		return apiCall(
			'GET',
			'/api/users/' + userId + '/friends',
		).then(friends => {
			dispatch(indexFriendsSuccess(friends));
		}).catch(error => {
			dispatch(indexFriendsFailure(error));
		});
	}
}


export function sendFriendRequestSuccess(friend) {
  console.log('friend', friend);
	return {
		type: SEND_FRIEND_REQUEST_SUCCESS,
		friend,
	};
}

export function sendFriendRequest(userId, inviteeUsername) {
	return dispatch => {
		return apiCall(
			'POST',
			'/api/users/' + userId + '/friends/invite',
      { inviteeUsername }
		).then(friend => {
			dispatch(sendFriendRequestSuccess(friend));
		}).catch(error => {
			// dispatch(sendFriendFailure(error));
		});
	};
}


export function acceptFriendRequestSuccess(friend) {
	return {
		type: ACCEPT_FRIEND_REQUEST_SUCCESS,
		friend,
	};
}

export function acceptFriendRequest(userId, friendUsername) {
	return dispatch => {
		return apiCall(
			'POST',
			'/api/users/' + userId + '/friends/accept',
      { friendUsername }
		).then(friend => {
			dispatch(acceptFriendRequestSuccess(friend));
		}).catch(error => {
			// dispatch(acceptFriendRequestFailure(error));
		});
	};
}



