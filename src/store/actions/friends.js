import { apiCall } from '../../services/api';
import {
	INDEX_FRIENDS_SUCCESS,
	ADD_FRIEND_SUCCESS,
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
			'/api/users/' + userId + '/friends'',
		).then(friends => {
			dispatch(indexFriendsSuccess);
		}).catch(error => {
			dispatch(indexFriendsFailure);
		});
	}
}

export function addFriendFailure(error) {
}

export function addFriendSuccess(response) {
	return {
		type: ADD_FRIEND_SUCCESS,
		response,
	};
}

export function addFriend(userId, friendId) {
	return dispatch => {
		return apiCall(
			'POST',
			'/api/users/' + userId + '/friends/' + friendId,
		).then(response => {
			dispatch(addFriendSuccess(response));
		}).catch(error => {
			dispatch(apiFailure(error));
		});
	};
}
