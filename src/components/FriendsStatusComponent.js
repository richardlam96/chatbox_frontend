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
    // Will need this for accepting/rejecting invites.
		this.setState({
			showForm: !this.state.showForm,
		});
	}

	render () {
		let {
			currentUser,
      friendsById,
      friendIds,
		} = this.props; 

    console.log(friendsById);
    console.log(friendIds);

		let friendsList = currentUser.friends.map(friendId => {
      return (
        <li className="friends-list-item" key={ friendId }>
          <i className="fa fa-user-circle-o"></i>
          { friendId }
        </li>
      );
		});

    let incomingRequestsList = currentUser.incomingRequests.map(id => {
      return (
        <li className="friends-list-item" key={ id }>
          <i className="fa fa-user-circle-o"></i>
          { id }
        </li>
      );
    });

    let outgoingRequestsList = currentUser.outgoingRequests.map((id, idx) => {
      return (
        <li className="friends-list-item" key={ idx }>
          <i className="fa fa-user-circle-o"></i>
          { friendsById[id].username }
        </li>
      );
    });


		return (
			<div className="friends-status-component">

        <h4>Friends</h4>
				<ul className="friends-list">
					{ friendsList }
				</ul>

        <h4>Incoming Requests</h4>
        <ul className="friends-list">
          { incomingRequestsList }
        </ul>

        <h4>Outgoing/Pending Requests</h4>
        <ul className="friends-list">
          { outgoingRequestsList }
        </ul>
			</div>
		);
	}
}

export default FriendsStatusComponent;
