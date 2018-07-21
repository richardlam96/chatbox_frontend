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

  handleDeleteServer = (currentUserId, serverId) => {
    console.log(this.props.state);
    this.props.deleteServer(currentUserId, serverId);
  }

  handleIndexServerMessages = (serverId) => {
    console.log('serverId', serverId);
    this.props.indexMessages(serverId);
  }


	render() {
    console.log('server nav', this.props.state);
		let { 
			currentUser, 
			serversById, 
			serverIds,
			createServer, 
			deleteServer,
      channelsById,
			indexChannels,
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
				<Link 
					to={path}
					key={serverId}
          onClick={() => this.handleIndexServerMessages(serverId)}
					>
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

