import { combineReducers } from 'redux';

import error from './error';
import currentUser from './currentUser';
import currentUserServers from './currentUserServers';
import currentServerChannels from './currentServerChannels';
import channelMessages from './channelMessages';
import friends from './friends';


const rootReducer = combineReducers({
	error,
	currentUser,
	currentUserServers,
	currentServerChannels,
	channelMessages,
  friends,
});

export default rootReducer;
