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
		} = this.props;

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
			messagesById,
			messageIds,
			match: { params },
		} = this.props;

		let messageList = messageIds.map(messageId => {
			return (
				<li key={messageId}>{messagesById[messageId].text}</li>
			);
		});

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
