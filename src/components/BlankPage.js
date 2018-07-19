import React from 'react';
import { Link, Redirect } from 'react-router-dom';


const BlankPage = ({ currentUser, serversById, match }) => {
	const params = Object.entries(match.params).map(pair => (
		<li key={pair[1]}>{pair[0]} is {pair[1]}</li>
	));

  // Make sure channel id in params doesn't exist (after delete).
  if (match.path !== '/activity' && !serversById[match.params.serverId]) {
    return (
      <Redirect to='/activity' />
    );
  }

	return (
		<div className="blank">
			<p>Blank test page for path: {match.path}</p>
			<ul>
				<li>{currentUser.username}</li>
			</ul>
			<ul>
				{params}
			</ul>
			<Link to="/">Return Home</Link>
		</div>
	);
}


export default BlankPage;
