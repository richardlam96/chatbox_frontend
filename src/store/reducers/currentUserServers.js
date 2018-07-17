import {
	INDEX_USER_SERVERS_SUCCESS,
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
		default:
			return state;
	}
}
