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
			dispatch(indexFriendsSuccess);
		}).catch(error => {
			dispatch(indexFriendsFailure);
		});
	}
}


export function sendFriendRequestSuccess(response) {
	return {
		type: SEND_FRIEND_REQUEST_SUCCESS,
		response,
	};
}

export function sendFriendRequest(userId, inviteeUsername) {
  console.log('hello');
	return dispatch => {
		return apiCall(
			'POST',
			'/api/users/' + userId + '/friends/invite',
      { inviteeUsername }
		).then(response => {
			dispatch(sendFriendRequestSuccess(response));
		}).catch(error => {
			// dispatch(sendFriendFailure(error));
		});
	};
}


export function acceptFriendRequestSuccess(response) {
	return {
		type: ACCEPT_FRIEND_REQUEST_SUCCESS,
		response,
	};
}

export function acceptFriendRequest(userId, friendUsername) {
	return dispatch => {
		return apiCall(
			'POST',
			'/api/users/' + userId + '/friends/accept',
      { friendUsername }
		).then(response => {
			dispatch(acceptFriendRequestSuccess(response));
		}).catch(error => {
			// dispatch(acceptFriendRequestFailure(error));
		});
	};
}



