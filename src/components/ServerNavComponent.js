import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Modal from '../containers/Modal';

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

  toggleForm = () => {
		this.setState({
			showForm: !this.state.showForm,
		});
	}

	render() {
		let { 
			currentUser,
			serversById, 
			serverIds,
			createServer,
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
					<Link to="/activity" className="server-list-item">
						<i className="fa fa-gamepad" aria-hidden="true"></i>
					</Link>
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

				{ this.state.showForm 
					? <Modal 
							objectName="server"
							onSubmit={createServer.bind(this, currentUser._id)}
							onToggle={this.toggleForm}
						/> 
					: <div></div> }

			</div>
		);
	}
}


export default ServerNavComponent;

