import {
	ADD_ERROR,
	REMOVE_ERROR,
  SET_CURRENT_USER_FAIL,
  CLEAR_CURRENT_USER_FAIL,
	INDEX_USER_SERVERS_FAILURE,
	CREATE_USER_SERVER_FAILURE,
} from '../actionTypes';


const DEFAULT_STATE = {
  exists: false,
}

export default (state=DEFAULT_STATE, action) => {
  state = Object.freeze(state);
	switch(action.type) {
		case ADD_ERROR:
			return {
				...state,
			};
		case REMOVE_ERROR:
			return {
				...state,
			};
    case SET_CURRENT_USER_FAIL:
      return {
        ...state,
        exists: true,
				message: action.error.message,
      };
    case CLEAR_CURRENT_USER_FAIL:
      return {
        exists: false,
      };
		case INDEX_USER_SERVERS_FAILURE:
			return {
				exists: true,
				...action.error,
			};
		case CREATE_USER_SERVER_FAILURE:
			return {
				exists: true,
				...action.error,
			};
		default:
			return state;
	}
}
