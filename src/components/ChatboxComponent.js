import React, { Component } from 'react';


class ChatboxComponent extends Component {
	constructor(props) {
		super(props);
	}

	async componentDidMount() {
		let {
			currentUser,
			indexMessages,
			messagesById,
			messageIds,
			match: { params },
			history,
		} = this.props;

		// for reloading
		await indexMessages(currentUser.id, params.channelId);
	}

	handleCreateMessage = (e) => {
		let {
			currentUser,
			createMessage,
			messagesById,
			messageIds,
			match: { params },
		} = this.props;

		let text = 'message' + Math.floor(Math.random() * 100000);
		createMessage(currentUser.id, params.channelId, text);
	}

	render() {
		let {
			channelsById,
			channelIds,
			messagesById,
			messageIds,
			match: { params },
		} = this.props;

		// if channel is not valid, (on deletion of channel), redirect or empty
		// chat?
		let messageList;
		if (channelIds.indexOf(params.channelId) === -1) {
			messageList = [];
		} else {
			messageList = messageIds.map(messageId => {
				return (
					<li key={messageId}>{messagesById[messageId].text}</li>
				);
			});
		}

		return (
			<div className="chatbox-component">
				<p>Chatbox on {params.channelId}</p>
				<button
					onClick={this.handleCreateMessage}
					>
					Create Message
				</button>
				<ul>
					{messageList}
				</ul>
			</div>
		);
	}
}


export default ChatboxComponent;
