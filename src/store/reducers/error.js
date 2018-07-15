import {
	ADD_ERROR,
	REMOVE_ERROR,
  SET_CURRENT_USER_FAIL,
  CLEAR_CURRENT_USER_FAIL,
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
        ...action.error,
      };
    case CLEAR_CURRENT_USER_FAIL:
      return {
        exists: false,
      };
		default:
			return state;
	}
}
