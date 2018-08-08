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
		this.socket = io.connect('http://localhost:3000');
	}

	async componentDidMount() {
		let {
			currentUser,
			match: { params },
			indexMessages,
		} = this.props;

		// Open socket and connect to the room.
		await this.openSocket();
		await this.changeRoom();

		// Index messages and store into state.
		await indexMessages(currentUser.id, params.serverId, params.channelId);
		await this.getMessages();

		// Scroll chat list to bottom.
		this.scrollToBottom();
	}

	async componentDidUpdate() {
		let {
			currentUser,
			indexMessages,
			match: { params },
		} = this.props;

		this.scrollToBottom();

		if (this.state.room !== params.channelId) {
			await this.changeRoom();
			await indexMessages(currentUser.id, params.serverId, params.channelId);
			await this.getMessages();
		}
	}

	// CONTENT LOADING AND SOCKET INTIALIZATION *********************************
	scrollToBottom = () => {
		this.messagesEnd.scrollIntoView({ behavior: "smooth" });
	}

	getMessages = () => {
		let {
			messagesById,
			messageIds,
		} = this.props;

		this.setState({
			messages: messageIds.map(id => messagesById[id]),
		});
	}

	openSocket = () => {
		// Set up socket listeners.
		this.socket.on('connect', () => {
			console.log('socket: client socket connected');
		});

		this.socket.on('send', msg => {
			console.log('socket: got a message!');
			this.setState({
				messages: [
					...this.state.messages,
					msg,
				],
			});
		});

		this.socket.on('change room', ({ ok, room }) => {
			if (ok) {
				console.log('socket: Now on room ' + room);
			} else {
				console.log('socket: Cannot change room');
			}
		});
	}

	changeRoom = () => {
		let {
			match: { params },
		} = this.props;
		return new Promise((resolve, reject) => {
			this.socket.emit('change room', { newRoom: params.channelId });
			this.setState({
				room: params.channelId,
			});
			resolve();
		});
	}

	// MESSAGE EVENT HANDLERS ***************************************************
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

		this.socket.emit('send', {
			text: this.state.message,
			user: currentUser.id,
			server: params.serverId,
			channel: params.channelId,
		});

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
			usersById,
		} = this.props;

		let messageList = this.state.messages.map((message, idx) => {
			let username;
			try {
				username = usersById[message.user].username;
			} catch(error) {
				// Sometimes catches a hard to reproduce error where users are undefined.
				console.log('Error for ' + message.user, usersById)
			}
			return (
				<li key={idx} className="chatbox-message">
					{username}
					<p>{message.text}</p>
				</li>
			);
		});

		
		return (
			<div className="chatbox-component">

        <div className="chatbox-header">
        </div>

        <ul className="chatbox-messages">
					{ messageList.length > 0 ? messageList : <p>No messages here. Start chatting now!</p> }
					<div ref={(el) => { this.messagesEnd = el; }}>
					</div>
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
