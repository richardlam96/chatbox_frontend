import React, { Component } from 'react';
import io from 'socket.io-client';
import '../styles/ChatboxComponent.css';



class ChatboxComponent extends Component {
	constructor(props) {
		super(props);
    this.state = {
      message: '',
			messages: [],
			room: this.props.match.params.channelId,
		};
	}

	componentDidMount() {
		this.openSocket();
	}

	componentWillReceiveProps() {
		this.changeRoom();
		this.setState({
			messages: [],
		});
	}

	openSocket = () => {
		let { 
			match: { params },
		} = this.props;

		// Technically, the route is pointless.
		// let url = 'http://localhost:3000/' + params.serverId + '/' + params.channelId; 

		// Start general socket to listen. 
		// Connect to the server.
		this.socket = io.connect('http://localhost:3000');

		// Set up socket listeners.
		this.socket.on('connect', () => {
			console.log('client socket connected');
		});

		this.socket.on('send', msg => {
			console.log('got a message!');
			this.setState({
				messages: [
					...this.state.messages,
					msg.text,
				],
			});
		});

		this.socket.on('change room', ({ ok, room }) => {
			if (ok) {
				console.log('Now on room ' + room);
			} else {
				console.log('Cannot change room');
			}
		});
	}

	changeRoom = () => {
		let {
			match: { params },
		} = this.props;
		this.socket.emit('change room', { newRoom: params.channelId });
		this.setState({
			room: params.channelId,
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
		let {
			currentUser,
			channelsById,
			messagesById,
			match: { params },
		} = this.props;

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
