import {
	INDEX_USER_CHANNELS_SUCCESS,
	INDEX_SERVER_CHANNELS_SUCCESS,
	CREATE_SERVER_CHANNEL_SUCCESS,
	DELETE_SERVER_CHANNEL_SUCCESS,
	UPDATE_SERVER_CHANNEL_SUCCESS,
	DELETE_USER_SERVER_SUCCESS,
	CREATE_CHANNEL_MESSAGE_SUCCESS,
} from '../actionTypes';


const DEFAULT_STATE = {
	channelsById: {},
	channelIds: [],
};


export default (state=DEFAULT_STATE, action) => {
  state = Object.freeze(state);
	switch(action.type) {
    case INDEX_USER_CHANNELS_SUCCESS:
			return {
				...state,
				channelsById: action.channelData.channelsById,
				channelIds: action.channelData.channelIds,
			};
		case CREATE_SERVER_CHANNEL_SUCCESS:
			const channelsById = { 
				...state.channelsById,
				[action.newChannel._id]: action.newChannel,
			};
			const channelIds = [
				...state.channelIds,
				action.newChannel._id,
			];
			return {
				...state,
				channelsById,
				channelIds,
			}
		case UPDATE_SERVER_CHANNEL_SUCCESS:
			const updatedChannelsById = Object.assign(
				state.channelsById,
				{
					[action.updatedChannel._id]: action.updatedChannel,
				}
			);
			return {
				...state,
				channelsById: updatedChannelsById,
			};
		case DELETE_SERVER_CHANNEL_SUCCESS:
			console.log('changing channels state after delete');
			let {
				[action.deletedChannel._id]: deletedChannel,
				...channelsByIdAfterDelete,
			} = state.channelsById;
			let leftoverChannels = state.channelIds.filter(channelId => {
        return channelId !== action.deletedChannel._id;
      });
			console.log('isolating changes');
			console.log(channelsByIdAfterDelete);
			console.log(leftoverChannels);
			return { 
				...state,
				channelsById: channelsByIdAfterDelete,
				channelIds: leftoverChannels,
			};
		case CREATE_CHANNEL_MESSAGE_SUCCESS:
			let { 
				[action.newMessage.channel]: targetChannel, 
				...rest 
			} = state.channelsById;
			targetChannel.messages.push(action.newMessage._id);
			return {
				...state,
				channelsById: { 
					...rest, 
					[targetChannel._id]: targetChannel,
				},
			};
		case DELETE_USER_SERVER_SUCCESS:
		default:
			return state;
	}
}

