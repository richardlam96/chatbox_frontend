import {
	INDEX_SERVER_CHANNELS_SUCCESS,
	CREATE_SERVER_CHANNEL_SUCCESS,
	DELETE_SERVER_CHANNEL_SUCCESS,
	UPDATE_SERVER_CHANNEL_SUCCESS,
	CREATE_CHANNEL_MESSAGE_SUCCESS,
} from '../actionTypes';


const DEFAULT_STATE = {
  isFetching: true,
	channelsById: {},
	channelIds: [],
};


export default (state=DEFAULT_STATE, action) => {
  state = Object.freeze(state);
	switch(action.type) {

    // CRUD actions for Channels.
    case INDEX_SERVER_CHANNELS_SUCCESS:
			return {
				...state,
        isFetching: false,
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
			let {
				[action.deletedChannel._id]: deletedChannel,
				...channelsByIdAfterDelete,
			} = state.channelsById;
			let leftoverChannels = state.channelIds.filter(channelId => {
        return channelId !== action.deletedChannel._id;
      });
			return { 
				...state,
				channelsById: channelsByIdAfterDelete,
				channelIds: leftoverChannels,
			};


    // Message CRUD actions that affect Channels.
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


		default:
			return state;
	}
}

