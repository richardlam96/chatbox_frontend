import React from 'react';


const Homepage = props => {
	return (
		<div className="homepage">
			This is the homepage.
			{props.currentUser ? 
				(<p>You logged in</p>) :
				(<p>You did NOT log in yet</p>)
			}
		</div>
	);
}

export default Homepage;
