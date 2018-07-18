import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ServerNavComponent extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let { currentUser, servers, createServer, deleteServer } = this.props;
		const serverList = servers.serverIds.map(serverId => (
			<Link to={'/channels/' + serverId} key={serverId}>
				{servers.serversById[serverId].name}
				<button
					onClick={() => deleteServer(currentUser.id, serverId)}
					>
					Delete
				</button>
			</Link>
		));

		return (
			<div className="server-nav-component">
				<button 
					onClick={() => createServer(currentUser.id, 'new server')}
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

