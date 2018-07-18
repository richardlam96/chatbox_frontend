import React, { Component } from 'react';


class ControlPaneComponent extends Component {
	constructor(props) {
		super(props);
	}

	handleCreateChannel = () => {
    let index = Math.floor(Math.random() * 100000);
		this.props.createChannel(
			this.props.currentUser.id, 
			this.props.match.params.serverId, 
			'channel' + index
		);
	}

	render() {
		let { currentUser, channelsById, channelIds } = this.props;
		let channelList = channelIds.map(id => (
			<li key={id}>{channelsById[id].name}</li>
		));
		console.log(channelIds);

		return (
			<div className="control-pane-component">
				<p>ControlPaneComponent</p>
				<button
					onClick={this.handleCreateChannel}
					>
					Create Channel
				</button>
				<ul>
					{channelList}
				</ul>
			</div>
		);
	}
}


export default ControlPaneComponent;
