import React, { Component } from 'react';
import io from 'socket.io-client';
import '../styles/ChatboxComponent.css';



class ChatboxComponent extends Component {
	constructor(props) {
		super(props);
    this.state = {
      message: '',
			messages: [],
    };

	}

	componentDidMount() {
		this.openSocket();
	}

	openSocket = () => {
		// Socket to listen to broadcasts.
		let { 
			match: { params },
		} = this.props;

		// Technically, the route is pointless.
		// let url = 'http://localhost:3000/' + params.serverId + '/' + params.channelId; 

		this.socket = io('/chat');
		this.socket.on('send', msg => {
			this.setState({
				messages: [
					...this.state.messages,
					msg.text,
				],
			});
		});
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
			 match: { params} ,
		 } = this.props;

		// Emit message for real time functionality.
		this.socket.emit('send', {
			text: this.state.message,
			user: currentUser.username,
			server: params.serverId,
			channel: params.channelId,
		});

		// let {
		// 	currentUser,
		// 	createMessage,
		// 	match: { params },
		// } = this.props;

		// createMessage(
		// 	currentUser.id, 
		// 	params.serverId, 
		// 	params.channelId, 
		// 	this.state.message
		// );

		this.setState({
			message: '',
		});
	}

	render() {
		// let {
		// 	currentUser,
		// 	channelsById,
		// 	messagesById,
		// 	match: { params },
		// } = this.props;

		// let currentChannel = channelsById[params.channelId];
    // let messageList = [];
    // if (currentChannel && currentChannel.messages) {
    //   messageList = currentChannel.messages.map(messageId => {
		// 		let message = messagesById[messageId];
    //     if (message) {
    //       return (
		// 				<li key={messageId} className="chatbox-message">
		// 					<div className="chatbox-message-details">
		// 						{currentUser.username}
		// 					</div>
		// 					<p>{message.text}</p>
		// 				</li>
		// 			);
    //     }
    //   });
    // }
			
		let messageList = this.state.messages.map((message, idx) => (
			<li key={idx} className="chatbox-message">
				<div className="chatbox-message-details">
				</div>
				<p>{message}</p>
			</li>
		));

		
		return (
			<div className="chatbox-component">
        <div className="chatbox-header">
          <p>Chatbox on {this.props.match.params.channelId}</p>
					<p>{this.state.socketTest}</p>
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
