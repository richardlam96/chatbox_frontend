import { apiCall } from '../../services/api';
import {
	INDEX_USER_SERVERS_SUCCESS,
	INDEX_USER_SERVERS_FAILURE,
} from '../actionTypes';


export function indexUserServersSuccess(serverData) {
	return {
		type: INDEX_USER_SERVERS_SUCCESS,
		serverData,
	};
}

export function indexUserServersFailure(error) {
	return {
		type: INDEX_USER_SERVERS_FAILURE,
		error,
	};
}

export function indexUserServers(ownerId) {
	return dispatch => {
		return apiCall(
			'GET',
			`/api/${ownerId}/servers`,
		).then(serverData => {
			console.log(serverData);
			dispatch(indexUserServersSuccess(serverData));
		}).catch(error => {
			dispatch(indexUserServersFailure(error));
		});
	}
}

