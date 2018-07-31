import React, { Component } from 'react';
import '../styles/ChatboxComponent.css';


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
			currentUser,
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
								{currentUser.username}
							</div>
							<p>{message.text}</p>
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

				<div className="chatbox-footer">
					<div className="chatbox-form">
						<form onSubmit={this.handleCreateMessage}>
							<input type="text" id="chatbox-form-input" onChange={this.handleChange} value={this.state.message} />
						</form>
					</div>
				</div>

			</div>
		);
	}
}


export default ChatboxComponent;
