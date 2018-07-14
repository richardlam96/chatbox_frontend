import { 
  SET_CURRENT_USER,
  AUTH_CURRENT_USER,
  SIGNOUT_CURRENT_USER,
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
		default:
			return state;
	}
}

