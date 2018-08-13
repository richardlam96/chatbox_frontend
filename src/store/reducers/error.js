import {
  SET_CURRENT_USER_FAIL,
  CLEAR_CURRENT_USER_FAIL,
	INDEX_USER_SERVERS_FAILURE,
	CREATE_USER_SERVER_FAILURE,
	DELETE_USER_SERVER_FAILURE,
	UPDATE_USER_SERVER_FAILURE,
	INDEX_SERVER_CHANNELS_FAILURE,
	CREATE_SERVER_CHANNEL_FAILURE,
	DELETE_SERVER_CHANNEL_FAILURE,
	UPDATE_SERVER_CHANNEL_FAILURE,
	INDEX_CHANNEL_MESSAGES_FAILURE,
	CREATE_CHANNEL_MESSAGE_FAILURE,
} from '../actionTypes';


const DEFAULT_STATE = {
  exists: false,
}

export default (state=DEFAULT_STATE, action) => {
  state = Object.freeze(state);
	switch(action.type) {
    case CLEAR_CURRENT_USER_FAIL:
      return {
        exists: false,
      };
    case SET_CURRENT_USER_FAIL:
			return {
				exists: true,
				status: action.error.status,
				message: action.error.message,
			};
		case INDEX_USER_SERVERS_FAILURE:
		case CREATE_USER_SERVER_FAILURE:
		case DELETE_USER_SERVER_FAILURE:
		case UPDATE_USER_SERVER_FAILURE:
		case INDEX_SERVER_CHANNELS_FAILURE:
		case CREATE_SERVER_CHANNEL_FAILURE:
		case DELETE_SERVER_CHANNEL_FAILURE:
		case UPDATE_SERVER_CHANNEL_FAILURE:
		case INDEX_CHANNEL_MESSAGES_FAILURE:
		case CREATE_CHANNEL_MESSAGE_FAILURE:
			console.log('error', action.error);
			return {
				exists: true,
				status: action.error.status,
				message: action.error.message,
			};
		default:
			return state;
	}
}
