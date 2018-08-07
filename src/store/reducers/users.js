import {
	INDEX_USERS_SUCCESS,
} from '../actionTypes';


const DEFAULT_STATE = {
	usersById: {},
	userIds: [],
};

export default (state=DEFAULT_STATE, action) => {
	state = Object.freeze(state);
	switch(action.type) {
		case INDEX_USERS_SUCCESS:
			return {
				usersById: action.users.usersById,
				userIds: action.users.userIds,
			};
		default:
			return state;
	}
}
