import React, { Component } from 'react';


class ServerNavComponent extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let { currentUser, servers, createServer, deleteServer } = this.props;
		const serverList = servers.serverIds.map(serverId => (
			<li key={serverId}>
				{servers.serversById[serverId].name}
				<button
					onClick={() => deleteServer(currentUser.id, serverId)}
					>
					Delete
				</button>
			</li>
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
			</div>
		);
	}
}


export default ServerNavComponent;

