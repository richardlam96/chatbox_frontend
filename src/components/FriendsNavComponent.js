import React, { Component } from 'react';
import Modal from '../containers/Modal';
import '../styles/FriendsNavComponent.css';


class FriendsNavComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showForm: false,
		};
	};

	handleToggle = () => {
		this.setState({
			showForm: !this.state.showForm,
		});
	}

	render() {
		let {
			currentUser,
			sendFriendRequest,
		} = this.props;

		return (
			<div className="friends-nav-component">

				<button className="friends-nav-button" onClick={this.handleToggle}>Add Friend</button>

				{ this.state.showForm
					? <Modal 
							objectName="friend"
							onSubmit={sendFriendRequest.bind(this, currentUser.id)}
							onToggle={this.handleToggle}
						/>
					: <div></div>
				}
	
			</div>
		);
	}
}

export default FriendsNavComponent;
