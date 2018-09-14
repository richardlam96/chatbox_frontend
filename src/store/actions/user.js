import { apiCall } from '../../services/api';
import {
	INDEX_USERS_SUCCESS,
  INDEX_USERS_FAILURE,
} from '../actionTypes.js';


export function indexUsersFailure(error) {
  return {
    type: INDEX_USERS_FAILURE,
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
      console.log('trigger index user failure');
      dispatch(indexUsersFailure(error));
		});
	}
}


