import React, { Component } from 'react';


class ChatboxComponent extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		let {
			currentUser,
			indexMessages,
			match: { params },
		} = this.props;

		indexMessages(currentUser.id, params.channelId);
	}

	handleCreateMessage = (e) => {
		let {
			currentUser,
			createMessage,
			match: { params },
		} = this.props;

		let text = 'message' + Math.floor(Math.random() * 100000);
		createMessage(currentUser.id, params.channelId, text);
	}

	render() {
		let {
			messagesById,
			messageIds,
		} = this.props;

		const messageList = messageIds.map(messageId => {
			return (
				<li key={messageId}>{messagesById[messageId].text}</li>
			);
		});

		return (
			<div className="chatbox-component">
				<p>Chatbox</p>
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
