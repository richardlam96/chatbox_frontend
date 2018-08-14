import React, { Component } from 'react';
import '../styles/FriendsStatusComponent.css';


class FriendsStatusComponent extends Component {
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

	render () {
		let {
			currentUser,
			usersById,
		} = this.props; 

		let friendsList = currentUser.friends.map(friendId => {
			if (usersById[friendId]) {
				return (
					<li className="friends-list-item" key={ friendId }>{ usersById[friendId].username }</li>
				);
			}
			return <li className="friends-list-item" key={ friendId }></li>;
		});

		return (
			<div className="friends-status-component">
				<ul className="friends-list">
					{ friendsList }
				</ul>
			</div>
		);
	}
}

export default FriendsStatusComponent;
