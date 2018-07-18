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
			let firstChannel = ('/' + serversById[serverId].channels[0]) || '';
			return (
				<Link 
					to={'/channels/' + serverId + firstChannel} 
					key={serverId}
					onClick={() => indexChannels(currentUser.id, serverId)}
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
				<ul>
					{serverList}
				</ul>
				<Link to="/activity">Activity</Link>
			</div>
		);
	}
}


export default ServerNavComponent;

