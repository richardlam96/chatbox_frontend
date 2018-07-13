import React from 'react';
import Navbar from './Navbar';


const LaunchPage = ({ match: { path } }) => (
	<div className="launchpage">
		<Navbar />
		<p>Launch Page, at: {path}</p>
	</div>
);


export default LaunchPage;

