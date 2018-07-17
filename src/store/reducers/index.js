import { combineReducers } from 'redux';
import error from './error';
import currentUser from './currentUser';
import currentUserServers from './currentUserServers';


const rootReducer = combineReducers({
	error,
	currentUser,
	currentUserServers,
});

export default rootReducer;
