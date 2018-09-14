import {
  SET_CURRENT_USER_FAIL,
  CLEAR_CURRENT_USER_FAIL,
  INDEX_USERS_FAILURE,
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
    case INDEX_USERS_FAILURE:
      console.log('error', action.type + ' ' + action.error);
			return {
				exists: true,
				status: action.error.status,
				message: action.error.message,
			};
		default:
			return state;
	}
}
