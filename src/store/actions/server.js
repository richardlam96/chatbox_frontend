import { apiCall } from '../../services/api';
import {
	INDEX_USER_SERVERS_SUCCESS,
	INDEX_USER_SERVERS_FAILURE,
	CREATE_USER_SERVER_SUCCESS,
	CREATE_USER_SERVER_FAILURE,
	DELETE_USER_SERVER_SUCCESS,
	DELETE_USER_SERVER_FAILURE,
	// UPDATE_USER_SERVER_SUCCESS,
	// UPDATE_USER_SERVER_FAILURE,
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

export function indexUserServers(userId) {
	return dispatch => {
		return apiCall(
			'GET',
			`/api/users/${userId}/servers`,
		).then(serverData => {
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
		return apiCall(
			'POST',
			`/api/users/${userId}/servers`,
			{ name: serverName }
		).then(newServer => {
			dispatch(createUserServerSuccess(newServer));
		}).catch(error => {
			dispatch(createUserServerFailure(error));
		});
	}
}


// DELETE SERVER _____________________________________________________________
export function deleteUserServerSuccess(deletedServer) {
	return {
		type: DELETE_USER_SERVER_SUCCESS,
		deletedServer,
	};
}

export function deleteUserServerFailure(error) {
	return {
		type: DELETE_USER_SERVER_FAILURE,
		error,
	};
}

export function deleteUserServer(userId, serverId) {
	return dispatch => {
		return apiCall(
			'DELETE',
			`/api/users/${userId}/servers/${serverId}`,
		).then(deletedServer => {
			dispatch(deleteUserServerSuccess(deletedServer));
		}).catch(error => {
			dispatch(deleteUserServerFailure(error));
		});
	}
}

