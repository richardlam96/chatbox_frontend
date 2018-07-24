import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/ControlPaneComponent.css';


class ControlPaneComponent extends Component {
	constructor(props) {
		super(props);
    this.state = {
			showOptions: false,
      showForm: false,
      channelName: '',
    };
	}

	toggleOptions = () => {
		this.setState({
			showOptions: !this.state.showOptions,
		});
	}

	// Handle Channel Form display, changes, and submission......................
  toggleForm = () => {
    this.setState({
      showForm: !this.state.showForm,
    });
  }

  handleChange = (e) => {
    this.setState({
      channelName: e.target.value,
    });
  }

	handleCreateChannel = (e) => {
    e.preventDefault();
    if (this.state.channelName) {
      this.props.createChannel(
        this.props.currentUser.id, 
        this.props.match.params.serverId, 
        '# ' + this.state.channelName
      );
    }
    this.toggleForm();
	}

	// Handle Channel deletion..................................................
  handleDeleteChannel = async function(channelId) {
    let { 
			currentUser, 
			match: { params },
			history,
		} = this.props;
    await this.props.deleteChannel(
      currentUser.id,
      params.serverId,
      channelId
    );
		history.push('/channels/' + params.serverId);
  }

	// Handle Server deletion...................................................
	handleDeleteServer = (currentUserId) => {
		let {
			deleteServer,
			match: { params },
			history,
		} = this.props;
    deleteServer(currentUserId, params.serverId);
		history.push('/activity');
  }


  render() {
		let { 
			currentUser, 
      serversById,
			channelsById, 
			channelIds,
			indexMessages,
			match: { params },
		} = this.props;
    
    let server = serversById[params.serverId];
    let serverName, channelList;
    if (server) {
			serverName = server.name;
      channelList = server.channels.map(channelId => {
        if (channelsById[channelId]) {
          let link = '/channels/' + params.serverId + '/' + channelId;
          return (
            <li key={channelId}>
              <Link 
								to={link}
								onClick={() => indexMessages(currentUser.id, params.serverId, channelId)}
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

				<div className="control-pane-header" onClick={this.toggleOptions}>
					<span>{serverName}</span>
				</div>

				<div className={this.state.showOptions ? "control-pane-options" : "hidden"}>
					<button
						onClick={() => this.handleDeleteServer(currentUser.id)}
						>
						Delete Server
					</button>
					<button
						onClick={this.toggleForm}
						>
						Create Channel
					</button>
				</div>

				<ul>
          {channelList}
				</ul>

				<div className={this.state.showForm ? "modal" : "hidden"}>
          <form className="server-form" onSubmit={this.handleCreateChannel}>
            <div className="server-form-header">
              CREATE YOUR CHANNEL 
            </div>
            CHANNEL NAME:
            <input type="text" onChange={this.handleChange} />
            <button>Submit</button>
          </form>
        </div>

				<Navbar />
			</div>
		);
	}
}


export default ControlPaneComponent;
