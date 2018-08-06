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
			messagesById,
			messageIds,
			match: { params },
			indexMessages,
		} = this.props;
		
		await this.openSocket();
		await this.changeRoom();
		await indexMessages(currentUser.id, params.serverId, params.channelId);
		await this.getMessages();
		this.scrollToBottom();
	}

	componentDidUpdate() {
		this.scrollToBottom();
	}

	async componentWillReceiveProps() {
		let {
			match: { params },
		} = this.props;

		if (this.state.room !== params.channelId) {
			await this.changeRoom();
			await this.getMessages();
		}
	}

	scrollToBottom = () => {
		this.messagesEnd.scrollIntoView({ behavior: "smooth" });
	}

	getMessages = () => {
		let {
			currentUser,
			indexMessages,
			messagesById,
			messageIds,
			match: { params },
		} = this.props;

		this.setState({
			messages: messageIds.map(id => messagesById[id]),
		});
	}

	openSocket = () => {
		let { 
			match: { params },
		} = this.props;

		// Set up socket listeners.
		this.socket.on('connect', () => {
			console.log('client socket connected');
			// Connect to all channels (join all rooms)?
		});

		this.socket.on('send', msg => {
			console.log('got a message!');
			this.setState({
				messages: [
					...this.state.messages,
					msg,
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
		return new Promise((resolve, reject) => {
			this.socket.emit('change room', { newRoom: params.channelId });
			this.setState({
				room: params.channelId,
			});
			resolve();
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
			 createMessage,
			 match: { params },
		 } = this.props;

		// Emit message for real time functionality.
		this.socket.emit('send', {
			text: this.state.message,
			user: currentUser.username,
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
			currentUser,
			channelsById,
			messagesById,
			messageIds,
			match: { params },
		} = this.props;

		let messageList = this.state.messages.map((message, idx) => (
			<li key={idx} className="chatbox-message">
				<p>{message.text}</p>
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
