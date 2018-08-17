import {
	INDEX_FRIENDS_SUCCESS,
	ADD_FRIEND_SUCCESS,
} from '../actionTypes';

const DEFAULT_STATE = {
	friendsById: {},
	friendIds: [],
};

export default function(state=DEFAULT_STATE, action) {
	state = Object.freeze(state);
	switch(action.type) {

		case INDEX_FRIENDS_SUCCESS:
			return {
				friendsById: action.friends.friendsById,
				friendIds: action.friends.friendIds,
			};

		case ADD_FRIEND_SUCCESS:
			return {
				friendsById: {
					...state.friendsById,
					action.response.friend,
				},
				friendIds: [
					...state.friendIds,
					action.response.friendId,
				],
			};

		default:
			return state;
	}
}
