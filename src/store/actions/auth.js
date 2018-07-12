import { apiCall } from '../../services/api';
import { SET_CURRENT_USER } from '../actionTypes';


export function setCurrentUser(user) {
	return {
		type: SET_CURRENT_USER,
		user,
	};
}

export function signInUser(userData) {
	return function(dispatch) {
		return apiCall(
			'post', 
			'/api/auth/signin',
			userData,
		).then(data => {
			localStorage.setItem('jwtToken', data.token);
			dispatch(setCurrentUser(data.user));
		});
	}
}

export function registerUser(userData) {
	return function(dispatch) {
		return apiCall(
			'post', 
			'/api/auth/register',
			userData,
		).then(data => {
			localStorage.setItem('jwtToken', data.token);
			dispatch(setCurrentUser(data.user));
		});
	}
}

