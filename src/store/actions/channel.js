import { apiCall } from '../../services/api';
import {
	INDEX_SERVER_CHANNELS_SUCCESS,
	INDEX_SERVER_CHANNELS_FAILURE,
	INDEX_USER_CHANNELS_SUCCESS,
	INDEX_USER_CHANNELS_FAILURE,
	CREATE_SERVER_CHANNEL_SUCCESS,
	CREATE_SERVER_CHANNEL_FAILURE,
	DELETE_SERVER_CHANNEL_SUCCESS,
	DELETE_SERVER_CHANNEL_FAILURE,
	UPDATE_SERVER_CHANNEL_SUCCESS,
	UPDATE_SERVER_CHANNEL_FAILURE,
} from '../actionTypes';

// INDEX ALL CHANNELS FOR USER ________________________________________________
export function indexUserChannelsSuccess(channelData) {
	return {
		type: INDEX_USER_CHANNELS_SUCCESS,
		channelData,
	};
}

export function indexUserChannelsFailure(error) {
	return {
		type: INDEX_USER_CHANNELS_FAILURE,
		error,
	};
}

export function indexUserChannels(ownerId) {
	return dispatch => {
		return apiCall(
			'GET',
			`/api/users/${ownerId}/channels`,
		).then(channelData => {
			console.log(channelData);
			dispatch(indexUserChannelsSuccess(channelData));
		}).catch(error => {
			dispatch(indexUserChannelsFailure(error));
		});
	}
}


// INDEX CHANNEL ______________________________________________________________
export function indexServerChannelsSuccess(channelData) {
	return {
		type: INDEX_SERVER_CHANNELS_SUCCESS,
		channelData,
	};
}

export function indexServerChannelsFailure(error) {
	return {
		type: INDEX_SERVER_CHANNELS_FAILURE,
		error,
	};
}

export function indexServerChannels(ownerId, serverId) {
	return dispatch => {
		return apiCall(
			'GET',
			`/api/users/${ownerId}/servers/${serverId}/channels`,
		).then(channelData => {
			console.log(channelData);
			dispatch(indexServerChannelsSuccess(channelData));
		}).catch(error => {
			dispatch(indexServerChannelsFailure(error));
		});
	}
}


// CREATE CHANNEL _____________________________________________________________
export function createServerChannelSuccess(newChannel) {
	return {
		type: CREATE_SERVER_CHANNEL_SUCCESS,
		newChannel,
	};
}

export function createServerChannelFailure(error) {
	return { 
		type: CREATE_SERVER_CHANNEL_FAILURE,
		error,
	};
}

export function createServerChannel(userId, serverId, channelName) {
	return dispatch =>  {
		return apiCall(
			'POST',
			`/api/users/${userId}/servers/${serverId}/channels`,
			{ name: channelName }
		).then(newChannel => {
			console.log('newChannel', newChannel);
			dispatch(createServerChannelSuccess(newChannel));
		}).catch(error => {
      console.log('error', error);
			dispatch(createServerChannelFailure(error));
		});
	}
}


// DELETE CHANNEL _____________________________________________________________
export function deleteServerChannelSuccess(deletedChannel) {
	return {
		type: DELETE_SERVER_CHANNEL_SUCCESS,
		deletedChannel,
	};
}

export function deleteServerChannelFailure(error) {
	return {
		type: DELETE_SERVER_CHANNEL_FAILURE,
		error,
	};
}

export function deleteServerChannel(ownerId, serverId, channelId) {
	return dispatch => {
		return apiCall(
			'DELETE',
			`/api/users/${ownerId}/servers/${serverId}/channels/${channelId}`,
		).then(deletedChannel => {
      console.log('deletedch', deletedChannel);
			dispatch(deleteServerChannelSuccess(deletedChannel));
		}).catch(error => {
      console.log('error', error);
			dispatch(deleteServerChannelFailure(error));
		});
	}
}


