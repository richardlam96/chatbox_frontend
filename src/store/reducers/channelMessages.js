import {
	INDEX_CHANNEL_MESSAGES_SUCCESS, 
	CREATE_CHANNEL_MESSAGE_SUCCESS,
} from '../actionTypes';

const DEFAULT_STATE = {
	messagesById: {},
	messageIds: [],
};

export default (state=DEFAULT_STATE, action) => {
	switch(action.type) {
		case CREATE_CHANNEL_MESSAGE_SUCCESS:
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
		default:
			return state;
	}
}

