import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ServerNavComponent.css';


class ServerNavComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showForm: false,
			serverName: '',
		};
	}

	handleChange = (e) => {
		this.setState({
			serverName: e.target.value,
		});
	}

  handleCreateServer = () => {
    this.props.createServer(this.props.currentUser.id, this.state.serverName);
  }

  handleDeleteServer = (currentUserId, serverId) => {
    this.props.deleteServer(currentUserId, serverId);
  }

	toggleForm = () => {
		this.setState({
			showForm: !this.state.showForm,
		});
	}

	render() {
		let { 
			currentUser, 
			serversById, 
			serverIds,
			createServer, 
			deleteServer,
      channelsById,
      match: { params },
		} = this.props;

		const serverList = serverIds.map(serverId => {
			// Create path based on existance of channels.
			let path, firstChannel;
			if (serversById[serverId].channels.length > 0) {
				firstChannel = serversById[serverId].channels[0];
				path = '/channels/' + serverId + '/' + firstChannel;
			} else {
				path = '/channels/' + serverId;  
			}

			return (
				<Link to={path} key={serverId}>
					{serversById[serverId].name}
					<button
						onClick={() => this.handleDeleteServer(currentUser.id, serverId)}
						>
						Delete
					</button>
				</Link>
			);
		});

		return (
			<div className="server-nav-component">
				<div className="server-list">
					<Link to="/activity">Activity</Link>
					{serverList}
				</div>
				<button 
					onClick={this.toggleForm}
					>
					Create new Server
				</button>
				<div className={this.state.showForm ? "server-form-modal" : "server-form-modal hidden"}>
					<form className="server-form" onSubmit={this.handleCreateServer}>
						<div className="server-form-header">
							CREATE YOUR SERVER 
						</div>
						SERVER NAME:
						<input type="text" onChange={this.handleChange} />
						<button>Submit</button>
					</form>
				</div>
			</div>
		);
	}
}


export default ServerNavComponent;

