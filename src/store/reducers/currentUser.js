import { SET_CURRENT_USER } from '../actionTypes';


const DEFAULT_STATE = {
	isAuthenticated: false,
	userCred: {}
}

export default (state=DEFAULT_STATE, action) => {
	state = Object.freeze(state);
	switch(action.type) {
		case SET_CURRENT_USER: 
			return {
				isAuthenticated: !!action.user && !!Object.keys(action.user).length,
				userCred: { ...action.user },
			};
		default:
			return state;
	}
}

