import { apiCall } from '../../services/api';
import { 
  SET_CURRENT_USER,
  SET_CURRENT_USER_FAIL,
  CLEAR_CURRENT_USER_FAIL,
  AUTH_CURRENT_USER,
  SIGNOUT_CURRENT_USER,
} from '../actionTypes';


export function setCurrentUser(userData) {
	return {
		type: SET_CURRENT_USER,
		user: userData,
	};
}

export function setCurrentUserFail(error) {
  return {
    type: SET_CURRENT_USER_FAIL,
    error,
  };
}

// This really acts as an all error clearing function.
export function clearCurrentUserFail() {
  return {
    type: CLEAR_CURRENT_USER_FAIL,
  };
}

export function authCurrentUser() {
  return {
    type: AUTH_CURRENT_USER,
  };
}

export function signoutUser() {
  localStorage.clear();
  return {
    type: SIGNOUT_CURRENT_USER,
  };
}

export function handleAuth(mode, userData) {
	return dispatch => {
		return apiCall(
			'post',
			'/api/auth/' + mode,
			userData,
		).then(data => {
			localStorage.setItem('jwtToken', data.token);
			localStorage.setItem('currentUser', JSON.stringify(data));
			dispatch(setCurrentUser(data));
		}).catch(error => {
      dispatch(setCurrentUserFail(error));
		});
	}
}

export function getUser(userId) {
	return dispatch => {
		return apiCall(
			'get',
			'/api/users/' + userId,
		).then(userData => {
			dispatch(setCurrentUser(userData));
		}).catch(error => {
			dispatch(setCurrentUserFail(error));
		});
	}
}
