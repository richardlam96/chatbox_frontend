import React, { Component } from 'react';


class ServerNavComponent extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let { currentUser, servers, createServer } = this.props;
		console.log(servers);
		const serverList = servers.serverIds.map(id => (
			<li key={id}>{servers.serversById[id].name}</li>
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

