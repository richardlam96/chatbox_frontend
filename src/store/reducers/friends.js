import {
	INDEX_FRIENDS_SUCCESS,
	SEND_FRIEND_REQUEST_SUCCESS,
} from '../actionTypes';

const DEFAULT_STATE = {
  isFetching: true,
	friendsById: {},
	friendIds: [],
};

export default function(state=DEFAULT_STATE, action) {
	state = Object.freeze(state);
	switch(action.type) {

		case INDEX_FRIENDS_SUCCESS:
			return {
        isFetching: false,
				friendsById: action.friends.friendsById,
				friendIds: action.friends.friendIds,
			};

    case SEND_FRIEND_REQUEST_SUCCESS:
      console.log('yay');
      return {
        friendsById: {
          ...state.friendsById,
          [action.friend._id]: action.friend,
        },
        friendIds: [
          ...state.friendIds,
          action.friend._id,
        ],
      };

		default:
			return state;
	}
}
