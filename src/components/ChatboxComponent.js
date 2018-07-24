import React, { Component } from 'react';


class ChatboxComponent extends Component {
	constructor(props) {
		super(props);
    this.state = {
      message: '',
    };
	}

	componentDidMount() {
		let {
			currentUser,
			indexMessages,
			match: { params },
		} = this.props;

		indexMessages(currentUser.id, params.serverId, params.channelId);
	}

	handleCreateMessage = (e) => {
		let {
			currentUser,
			createMessage,
			match: { params },
		} = this.props;

		let text = 'message' + Math.floor(Math.random() * 100000);
		createMessage(currentUser.id, params.serverId, params.channelId, text);
	}

	render() {
		let {
			channelsById,
			messagesById,
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
        <div className="chatbox-header">
          <p>Chatbox on {params.channelId}</p>
        </div>
        <ul className="chatbox-messages">
					{messageList}
				</ul>
        <div className="chatbox-input">
          <form onSubmit={this.handleCreateMessage}>
            <input type="text" />
            <button>SEND</button>
          </form>
        </div>


			</div>
		);
	}
}


export default ChatboxComponent;
