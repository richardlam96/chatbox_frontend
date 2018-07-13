import React from 'react';
import { Link } from 'react-router-dom';


const Blank = ({ match: { path } }) => (
	<div className="blank">
		<p>Blank test page for path: {path}</p>
		<Link to="/">Return Home</Link>
	</div>
);


export default Blank;
