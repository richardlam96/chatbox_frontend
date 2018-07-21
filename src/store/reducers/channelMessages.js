import {
	INDEX_CHANNEL_MESSAGES_SUCCESS, 
	CREATE_CHANNEL_MESSAGE_SUCCESS,
	DELETE_USER_SERVER_SUCCESS,
	DELETE_SERVER_CHANNEL_SUCCESS,
} from '../actionTypes';

const DEFAULT_STATE = {
	messagesById: {},
	messageIds: [],
};

export default (state=DEFAULT_STATE, action) => {
	switch(action.type) {
		case CREATE_CHANNEL_MESSAGE_SUCCESS:
			console.log('state', state);
			return {
				...state,
				messagesById: {
					...state.messagesById,
					[action.newMessage._id]: action.newMessage,
				},
				messageIds: [
					...state.messageIds,
					action.newMessage._id,
				],
			};
		case INDEX_CHANNEL_MESSAGES_SUCCESS:
			return {
				messagesById: action.messages.messagesById,
				messageIds: action.messages.messageIds,
			};
		case DELETE_SERVER_CHANNEL_SUCCESS:
			// Find messages with channel.
			const filteredMessageIds = state.messageIds.filter(messageId => {
				return state.messagesById[messageId].channel !== action.deletedChannel._id;
			});

			const filteredMessagesById = filteredMessageIds.reduce((acc, messageId) => {
				acc[messageId] = state.messagesById[messageId];
				return acc;
			});
			return {
				...state,
				messagesById: filteredMessagesById,
				messageIds: filteredMessageIds,
			};
		case DELETE_USER_SERVER_SUCCESS:
		default:
			return state;
	}
}

