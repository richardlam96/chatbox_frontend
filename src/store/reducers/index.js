import { combineReducers } from 'redux';
import error from './error';
import currentUser from './currentUser';


const rootReducer = combineReducers({
	error,
	currentUser,
});

export default rootReducer;
