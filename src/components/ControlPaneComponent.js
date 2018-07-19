import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ControlPaneComponent extends Component {
	constructor(props) {
		super(props);
	}

	handleCreateChannel = () => {
    console.log(this.props.currentUser);
    let index = Math.floor(Math.random() * 100000);
		this.props.createChannel(
			this.props.currentUser.id, 
			this.props.match.params.serverId, 
			'channel' + index
		);
	}

  handleDeleteChannel = (channelId) => {
    console.log(this.props.state);
    let { currentUser, match: { params } } = this.props;
    this.props.deleteChannel(
      currentUser.id,
      params.serverId,
      channelId
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
          let link = '/channels/' + params.serverId + '/' + channelId;
          return (
            <li key={channelId}>
              <Link to={link}>
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
