import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ServerNavComponent extends Component {
	constructor(props) {
		super(props);
	}

  handleCreateServer = (e) => {
    let index = Math.floor(Math.random() * 100000);
    this.props.createServer(this.props.currentUser.id, 'new server' + index);
  }

	render() {
		let { 
			currentUser, 
			serversById, 
			serverIds,
			createServer, 
			deleteServer,
			indexChannels,
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
			console.log(path);

			return (
				<Link 
					to={path} 
					key={serverId}
					>
					{serversById[serverId].name}
					<button
						onClick={() => deleteServer(currentUser.id, serverId)}
						>
						Delete
					</button>
				</Link>
			);
		});

		return (
			<div className="server-nav-component">
				<button 
					onClick={this.handleCreateServer}
					>
					Create new Server
				</button>
				<div className="server-list">
					<Link to="/activity">Activity</Link>
					{serverList}
				</div>
			</div>
		);
	}
}


export default ServerNavComponent;

