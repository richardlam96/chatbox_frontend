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

		// For handling refreshes
		indexMessages(currentUser.id, params.serverId, params.channelId);
	}

	handleChange = e => {
		this.setState({
			message: e.target.value,
		});
	}

	handleCreateMessage = (e) => {
		e.preventDefault();
		let {
			currentUser,
			createMessage,
			match: { params },
		} = this.props;

		createMessage(
			currentUser.id, 
			params.serverId, 
			params.channelId, 
			this.state.message
		);

		this.setState({
			message: '',
		});
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
				let message = messagesById[messageId];
        if (message) {
          return (
						<li key={messageId} className="chatbox-message">
							<div className="chatbox-message-details">
								{message.user}
							</div>
							{message.text}
						</li>
					);
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
            <input type="text" onChange={this.handleChange} value={this.state.message} />
          </form>
        </div>
			</div>
		);
	}
}


export default ChatboxComponent;
