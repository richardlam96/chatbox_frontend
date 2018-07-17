import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'; 
import Blank from '../containers/Blank';


const ServerMainComponent = (props) => {
	return(
		<div className="server-main-component">
			<Switch>
				<Route path="/home/:serverId" render={Blank} />
			</Switch>
		</div>
	);
};


export default ServerMainComponent;
