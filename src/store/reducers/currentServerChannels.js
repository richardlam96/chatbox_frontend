import {
	INDEX_SERVER_CHANNELS_SUCCESS,
	CREATE_SERVER_CHANNEL_SUCCESS,
	DELETE_SERVER_CHANNEL_SUCCESS,
	UPDATE_SERVER_CHANNEL_SUCCESS,
} from '../actionTypes';


const DEFAULT_STATE = {
	channelsById: {},
	channelIds: [],
};


export default (state=DEFAULT_STATE, action) => {
	switch(action.type) {
		case INDEX_SERVER_CHANNELS_SUCCESS:
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
			const {
				[action.deletedChannel._id]: deletedChannel,
				...channelsByIdAfterDelete,
			} = state.channelsById;
			const [
				deletedId = action.deletedChannel._id,
				...channelIdsAfterDelete
			] = state.channelIds;
			return { 
				...state,
				channelsById,
				channelIds,
			};
		default:
			return state;
	}
}

