import { apiCall } from '../../services/api';
import {
	INDEX_CHANNEL_MESSAGES_SUCCESS, 
	INDEX_CHANNEL_MESSAGES_FAILURE, 
	CREATE_CHANNEL_MESSAGE_SUCCESS,
	CREATE_CHANNEL_MESSAGE_FAILURE,
} from '../actionTypes.js';


// CREATE CHANNEL MESSAGE ____________________________________________________
export function createChannelMessageSuccess(newMessage) {
	return {
		type: CREATE_CHANNEL_MESSAGE_SUCCESS,
		newMessage,
	};
}

export function createChannelMessageFailure(error) {
	return {
		type: CREATE_CHANNEL_MESSAGE_FAILURE,
		error,
	};
}

export function createChannelMessage(serverId, channelId, text) {
	return dispatch => {
		return apiCall(
			'POST',
			`/api/servers/${serverId}/channels/${channelId}/messages`,
			{ text }
		).then(newMessage => {
			dispatch(createChannelMessageSuccess(newMessage));
		}).catch(error => {
			dispatch(createChannelMessageSuccess(error));
		});
	}
}

// INDEX CHANNEL MESSAGES ____________________________________________________
export function indexChannelMessagesSuccess(messages) {
	return {
		type: INDEX_CHANNEL_MESSAGES_SUCCESS, 
		messages,
	};
}

export function indexChannelMessagesFailure(error) {
	return {
		type: INDEX_CHANNEL_MESSAGES_FAILURE,
		error,
	};
}

export function indexChannelMessages(serverId) {
	return dispatch => {
    console.log(serverId);
		return apiCall(
			'GET',
			`/api/servers/${serverId}/messages`,
		).then(messages => {
			console.log('messages', messages);
			dispatch(indexChannelMessagesSuccess(messages));
		}).catch(error => {
			console.log('error', error);
			dispatch(indexChannelMessagesFailure(error));
		});
	}
}

