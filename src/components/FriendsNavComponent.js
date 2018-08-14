import React, { Component } from 'react';
import Modal from '../containers/Modal';

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
			addFriend,
		} = this.props;

		return (
			<div className="friends-nav-component">

				<button onClick={this.handleToggle}>Add Friend</button>

				{ this.state.showForm
					? <Modal 
							objectName="friend"
							onSubmit={addFriend.bind(this, currentUser.id)}
							onToggle={this.handleToggle}
						/>
					: <div></div>
				}
	
			</div>
		);
	}
}

export default FriendsNavComponent;
