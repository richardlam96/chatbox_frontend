import React from 'react';
import { Link } from 'react-router-dom';


const BlankPage = ({ currentUser, match: { path } }) => (
	<div className="blank">
		<p>Blank test page for path: {path}</p>
    <ul>
      <li>{currentUser.username}</li>
    </ul>
		<Link to="/">Return Home</Link>
	</div>
);


export default BlankPage;
