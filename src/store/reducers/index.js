import { combineReducers } from 'redux';
import error from './error';
import currentUser from './currentUser';
import currentUserServers from './currentUserServers';
import currentServerChannels from './currentServerChannels';
import channelMessages from './channelMessages';


const rootReducer = combineReducers({
	error,
	currentUser,
	currentUserServers,
	currentServerChannels,
	channelMessages,
});

export default rootReducer;
