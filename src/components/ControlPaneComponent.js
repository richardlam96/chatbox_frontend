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
    console.log('render', this.props);
		let { 
			currentUser, 
      serversById,
			channelsById, 
			channelIds,
			match: { params },
		} = this.props;
    
    let server = serversById[params.serverId];
    let channelList;
    if (server) {
      channelList = server.channels.map(channelId => {
        if (channelsById[channelId]) {
          return (
            <li key={channelId}>{channelsById[channelId].name}</li>
          );
        }
        return;
      });
    }

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
