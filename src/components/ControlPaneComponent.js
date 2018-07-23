import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ControlPaneComponent extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		let { 
			currentUser, 
			indexChannels,
			match: { params },
		} = this.props;

		// indexChannels(currentUser.id);
	}

	handleCreateChannel = () => {
    let index = Math.floor(Math.random() * 100000);
		this.props.createChannel(
			this.props.currentUser.id, 
			this.props.match.params.serverId, 
			'channel' + index
		);
	}

  handleDeleteChannel = async function(channelId) {
    let { currentUser, match: { params } } = this.props;
    await this.props.deleteChannel(
      currentUser.id,
      params.serverId,
      channelId
    );
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
