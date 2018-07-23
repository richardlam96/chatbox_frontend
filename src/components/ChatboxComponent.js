import React, { Component } from 'react';


class ChatboxComponent extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		let {
			currentUser,
			indexMessages,
			messagesById,
			messageIds,
			match: { params },
			history,
		} = this.props;

		indexMessages(currentUser.id, params.serverId, params.channelId);
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
		createMessage(currentUser.id, params.serverId, params.channelId, text);
	}

	render() {
		let {
      currentUser,
      serversById,
      serverIds,
			channelsById,
			channelIds,
			messagesById,
			messageIds,
      indexMessages,
			match: { params },
		} = this.props;

    let currentChannel = channelsById[params.channelId];
    let messageList = [];
    if (currentChannel && currentChannel.messages) {
      messageList = currentChannel.messages.map(messageId => {
        if (messagesById[messageId]) {
          return (<li key={messageId}>{messagesById[messageId].text}</li>);
        }
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
