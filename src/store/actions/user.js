import { apiCall } from '../../services/api';
import {
	INDEX_USERS_SUCCESS,
	API_FAILURE,
	ADD_FRIEND_SUCCESS,
} from '../actionTypes.js';


export function apiFailure(error) {
	return {
		type: API_FAILURE,
		error,
	};
}

export function indexUsersSuccess(users) {
	return {
		type: INDEX_USERS_SUCCESS,
		users,
	};
}

export function indexUsers() {
	return dispatch => {
		return apiCall(
			'GET',
			'/api/users'
		).then(users => {
			dispatch(indexUsersSuccess(users));
		}).catch(error => {
			dispatch(apiFailure(error));
		});
	}
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
