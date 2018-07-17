import {
	INDEX_USER_SERVERS_SUCCESS,
	CREATE_USER_SERVER_SUCCESS,
} from '../actionTypes';


const DEFAULT_STATE = {
	serversById: {},
	serverIds: [],
}

export default (state=DEFAULT_STATE, action) => {
	state = Object.freeze(state);
	switch(action.type) {
		case INDEX_USER_SERVERS_SUCCESS:
			return {
				...state,
				...action.serverData,
			};
		case CREATE_USER_SERVER_SUCCESS:
			const serversById = {
				...state.serversById,
				[action.newServer._id]: action.newServer,
			};
			const serverIds = [
				...state.serverIds,
				action.newServer._id,
			];
			return {
				...state,
				serversById,
				serverIds,
			};
		default:
			return state;
	}
}
