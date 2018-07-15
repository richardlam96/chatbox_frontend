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
		user: { ...userData },
	};
}

export function setCurrentUserFail(error) {
  return {
    type: SET_CURRENT_USER_FAIL,
    error,
  };
}

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
			dispatch(setCurrentUser(data));
		}).catch(error => {
      dispatch(setCurrentUserFail(error));
		});
	}
}


// export function signInUser(userData) {
// 	return dispatch => {
// 		return apiCall(
// 			'post', 
// 			'/api/auth/signin',
// 			userData,
// 		).then(data => {
// 			localStorage.setItem('jwtToken', data.token);
// 			dispatch(setCurrentUser(data.user));
// 		});
// 	}
// }
// 
// export function registerUser(userData) {
// 	return dispatch => {
// 		return apiCall(
// 			'post', 
// 			'/api/auth/register',
// 			userData,
// 		).then(data => {
// 			localStorage.setItem('jwtToken', data.token);
// 			dispatch(setCurrentUser(data.user));
// 		});
// 	}
// }
// 
