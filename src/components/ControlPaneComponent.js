import React, { Component } from 'react';
import { Link } from 'react-router-dom';


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

  handleDeleteChannel = (channelId) => {
    let { 
			currentUser,
			channelIds,
			match: { params },
			history,
		} = this.props;

		// Get index of deleted channel.
		let channelIndex = channelIds.indexOf(channelId);
		if (channelIndex > 0) {
			channelIndex--;
		}

		// Create next path.
		let nextPath;
		if (channelIds.length <= 1) {
			nextPath = '/channels/' + params.serverId;
		} else {
			let nextChannelId = channelIds[channelIndex];
			nextPath = '/channels/' + params.serverId + '/' + nextChannelId;
		}

    this.props.deleteChannel(
      currentUser.id,
      params.serverId,
      channelId
    ).then(() => history.push(nextPath));
  }

  render() {
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
          let link = '/channels/' + params.serverId + '/' + channelId;
          return (
            <li key={channelId}>
              <Link 
								to={link}
								onClick={() => this.props.indexMessages(currentUser.id, channelId)}
								>
								{channelsById[channelId].name}
                <button
                  onClick={() => this.handleDeleteChannel(channelId)}
                  >
                  Delete
                </button>
              </Link>
            </li>
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
