import { apiCall } from '../../services/api';
import {
	INDEX_USER_SERVERS_SUCCESS,
	INDEX_USER_SERVERS_FAILURE,
	CREATE_USER_SERVER_SUCCESS,
	CREATE_USER_SERVER_FAILURE,
} from '../actionTypes';


// INDEX SERVER ______________________________________________________________
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
		console.log(...arguments);
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


// CREATE SERVER _____________________________________________________________
export function createUserServerSuccess(newServer) {
	return {
		type: CREATE_USER_SERVER_SUCCESS,
		newServer,
	};
}

export function createUserServerFailure(error) {
	return { 
		type: CREATE_USER_SERVER_FAILURE,
		error,
	};
}

export function createUserServer(userId, serverName) {
	return dispatch =>  {
		console.log(...arguments);
		return apiCall(
			'POST',
			`/api/${userId}/servers`,
			{ name: serverName }
		).then(newServer => {
			console.log(newServer);
			dispatch(createUserServerSuccess(newServer));
		}).catch(error => {
			console.log(error);
			dispatch(createUserServerFailure(error));
		});
	}
}
