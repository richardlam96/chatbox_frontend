import React from 'react';


const FriendsStatusComponent = ({ currentUser, usersById }) => {
	let friendsList = currentUser.friends.map(friendId => {
		if (usersById[friendId]) {
			return (
				<li key={ friendId }>{ usersById[friendId].username }</li>
			);
		}
	});
	return (
		<div className="blank">
			<p>Friends Status Page</p>
			<ul>
				{ friendsList }
			</ul>
		</div>
	);
}


export default FriendsStatusComponent;
