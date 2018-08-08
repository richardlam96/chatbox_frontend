import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        this.state.channelName
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
			logout,
			match: { params },
		} = this.props;
    
    let server = serversById[params.serverId];
    let serverName, channelList;
    if (server) {
			serverName = server.name;
      channelList = server.channels.map(channelId => {
				try {
					let channel = channelsById[channelId];
          let link = '/channels/' + params.serverId + '/' + channelId;
          return (
            <li key={channelId} className="control-pane-list-item">
              <Link 
								to={link}
                className="control-pane-list-item-link"
								>
								# {channel.name}
                <span
                  onClick={() => this.handleDeleteChannel(channelId)}
                  >
                  <i className="fa fa-minus-circle"></i>
                </span>
              </Link>
            </li>
          );
        }
				catch(error) {
					console.log('error', error.message);
				}
				return <li key={channelId}></li>;
      });
    }

		return (
			<div className="control-pane-component">

				<div className="control-pane-wrapper">
				<div className="control-pane-header" onClick={this.toggleOptions}>
					<span>
						<i className="fa fa-caret-down" aria-hidden="true"></i> {serverName}
					</span>
				</div>

				<div className={this.state.showOptions ? "control-pane-options" : "hidden"}>
					<button
						onClick={() => this.handleDeleteServer(currentUser.id)}
						>
						<i className="fa fa-trash-o"></i>
						<span> Delete Server</span>
					</button>
					<button
						onClick={this.toggleForm}
						>
						<i className="fa fa-plus-circle"></i>
						<span> Create Channel</span>
					</button>
				</div>

				<ul className="control-pane-list">
          {channelList}
				</ul>

				<div className={this.state.showForm ? "modal" : "hidden"}>
          <form className="modal-form" onSubmit={this.handleCreateChannel}>
            <div className="modal-form-header">
              CREATE YOUR CHANNEL 
            </div>
            CHANNEL NAME:
            <input type="text" onChange={this.handleChange} />
            <button>Submit</button>
          </form>
        </div>
        </div>
			
				<div className="control-pane-footer">
					<span>{currentUser.username}</span>
					<a className="logout-link" onClick={logout}>Logout</a>
				</div>
			</div>
		);
	}
}


export default ControlPaneComponent;
