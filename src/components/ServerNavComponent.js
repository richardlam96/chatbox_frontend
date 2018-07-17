import React, { Component } from 'react';


class ServerNavComponent extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log(this.props);
		const serverList = this.props.servers.serverIds.map(id => (
			<li>{this.props.servers.serverById[id].name}</li>
		));

		return (
			<div className="server-nav-component">
				<ul>
					{serverList}
				</ul>
			</div>
		);
	}
}


export default ServerNavComponent;

