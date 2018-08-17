import { 
  SET_CURRENT_USER,
  AUTH_CURRENT_USER,
  SIGNOUT_CURRENT_USER,
	ACCEPT_FRIEND_REQUEST_SUCCESS,
	SEND_FRIEND_REQUEST_SUCCESS,
} from '../actionTypes';


const DEFAULT_STATE = {
  isAuthenticated: false,
};

export default (state=DEFAULT_STATE, action) => {
	state = Object.freeze(state);
	switch(action.type) {

		case SET_CURRENT_USER: 
			return {
				isAuthenticated: !!action.user && !!Object.keys(action.user).length,
        ...action.user,
			};

    case AUTH_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: true,
      };

    case SIGNOUT_CURRENT_USER:
      return {
        isAuthenticated: false,
      };

    case SEND_FRIEND_REQUEST_SUCCESS:
      // Id gets added to currentUser's outgoingRequests.
      // currentUser's id should also be added to receiver's incoming. (socket?)
      return {
        ...state,
        outgoingRequests: [
          ...state.outgoingRequests,
          action.response.invitee
        ],
      };

		case ACCEPT_FRIEND_REQUEST_SUCCESS:
      // Id is moved from outgoingRequests to friends.
      // currentUser's id should also be moved from receivers incoming to
      // friends. (socket?)
			return {
				...state,
				friends: [
					...state.friends,
					action.response.friend,
				],
        outgoingRequests: this.outgoingRequests.filter(id => {
          return id !== action.response.friend;
        }),
			}

		default:
			return state;
	}
}

