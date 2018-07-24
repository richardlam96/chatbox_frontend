import React, { Component } from 'react';
import '../styles/ServerFormModal.css';


class ServerFormModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shown: false;
		};
	}

	render() {
		return (
			<div className="server-form-modal">
				<input type="text" autofocus />
			</div>
		);
	}
}


export default ServerFormModal;
