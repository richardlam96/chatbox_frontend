import {
	INDEX_USER_SERVERS_SUCCESS,
	CREATE_USER_SERVER_SUCCESS,
	DELETE_USER_SERVER_SUCCESS,
	CREATE_SERVER_CHANNEL_SUCCESS,
} from '../actionTypes';


const DEFAULT_STATE = {
	serversById: {},
	serverIds: [],
}

export default (state=DEFAULT_STATE, action) => {
	state = Object.freeze(state);
	switch(action.type) {
		case INDEX_USER_SERVERS_SUCCESS:
			return {
				...state,
				...action.serverData,
			};
		case CREATE_USER_SERVER_SUCCESS:
			const serversById = {
				...state.serversById,
				[action.newServer._id]: action.newServer,
			};
			const serverIds = [
				...state.serverIds,
				action.newServer._id,
			];
			return {
				...state,
				serversById,
				serverIds,
			};
		case DELETE_USER_SERVER_SUCCESS:
			const { [action.deletedServer._id]: deletedServer, ...rest } = state.serversById;
			const remainingServerIds = state.serverIds.filter(id => {
				return id !== action.deletedServer._id;
			});
			return {
				...state,
				serversById: rest,
				serverIds: remainingServerIds,
			};
    case CREATE_SERVER_CHANNEL_SUCCESS:
      const targetServerId = action.newChannel.server;
      const targetServerChannels = state.serversById[targetServerId].channels;
      const updatedChannels = [
        ...targetServerChannels,
        action.newChannel._id,
      ];
      return {
        ...state,
        serversById: Object.assign(state.serversById, {
          [targetServerId]: Object.assign(
            state.serversById[targetServerId], 
            {
              channels: updatedChannels,
              ...rest,
            }
          ),
        }),
      }
		default:
			return state;
	}
}
