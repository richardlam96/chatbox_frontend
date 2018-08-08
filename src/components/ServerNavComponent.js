import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ServerNavComponent.css';


class ServerNavComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showForm: false,
			serverName: '',
		};
	}

	handleChange = (e) => {
		this.setState({
			serverName: e.target.value,
		});
	}

  handleCreateServer = e => {
		e.preventDefault();
		if (this.state.serverName) {
			this.props.createServer(this.props.currentUser.id, this.state.serverName);
		}
		this.toggleForm();
  }

	toggleForm = () => {
		this.setState({
			showForm: !this.state.showForm,
		});
	}

	render() {
		let { 
			serversById, 
			serverIds,
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
				<Link to={path} key={serverId} className="server-list-item">
					{serversById[serverId].name[0]}
				</Link>
			);
		});

		return (
			<div className="server-nav-component">
				<div className="server-list">
					<Link to="/activity" className="server-list-item">A</Link>
					<hr />
					{serverList}
					<button 
						className="server-list-item"
						onClick={this.toggleForm}
						>
						+
					</button>
					<hr />
				</div>
				<div className={this.state.showForm ? "modal" : "hidden"}>
					<form className="server-form" onSubmit={this.handleCreateServer}>
						<div className="server-form-header">
							CREATE YOUR SERVER 
						</div>
						SERVER NAME:
						<input type="text" onChange={this.handleChange} />
						<button>Submit</button>
					</form>
				</div>
			</div>
		);
	}
}


export default ServerNavComponent;

