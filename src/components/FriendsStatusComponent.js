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
      friendIds,
		} = this.props; 

    console.log(friendIds);

		// let friendsList = currentUser.friends.map((id, idx) => {
    //   return (
    //     <li className="friends-list-item" key={ idx }>
    //       <i className="fa fa-user-circle-o"></i>
    //       { friendsById[id].username }
    //     </li>
    //   );
		// });

    // let incomingRequestsList = currentUser.incomingRequests.map((id, idx) => {
    //   return (
    //     <li className="friends-list-item" key={ idx }>
    //       <i className="fa fa-user-circle-o"></i>
    //       { friendsById[id].username }
    //     </li>
    //   );
    // });

    // let outgoingRequestsList = currentUser.outgoingRequests.map((id, idx) => {
    //   return (
    //     <li className="friends-list-item" key={ idx }>
    //       <i className="fa fa-user-circle-o"></i>
    //       { friendsById[id].username }
    //     </li>
    //   );
    // });
    
    let friendsList;
    let incomingRequestsList;
    let outgoingRequestsList;

		return (
			<div className="friends-status-component">

        <h4>Friends</h4><span>{ currentUser.friends.length }</span>
				<ul className="friends-list">
					{ friendsList }
				</ul>

        <h4>Incoming Requests</h4><span>{ currentUser.incomingRequests.length }</span>
        <ul className="friends-list">
          { incomingRequestsList }
        </ul>

        <h4>Outgoing/Pending Requests</h4><span>{ currentUser.outgoingRequests.length }</span>
        <ul className="friends-list">
          { outgoingRequestsList }
        </ul>
			</div>
		);
	}
}

export default FriendsStatusComponent;
