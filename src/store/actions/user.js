import { apiCall } from '../../services/api';
import {
	INDEX_USERS_SUCCESS,
	API_FAILURE,
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

