import React from 'react';
import { Link } from 'react-router-dom';


const BlankPage = ({ currentUser, match }) => {
	const params = Object.entries(match.params).map(pair => (
		<li>{pair[0]} is {pair[1]}</li>
	));

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
