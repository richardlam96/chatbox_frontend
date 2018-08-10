import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Chatbox from '../containers/Chatbox';
import '../styles/MainContentComponent.css';

import Blank from '../containers/Blank';

class MainContentComponent extends Component {
	render() {
		let {
			channelsById,
			match: { params },
		} = this.props;

		let channel = channelsById[params.channelId];
		let channelName = channel ? channel.name : 'Channel';
		return ( 
			<div className="main-content-component">
				<div className="main-content-header">
					<span># {channelName}</span>
				</div>
				<Switch className="main-content">
					<Route exact path="/activity" render={Blank} />
					<Route exact path="/channels/:serverId" render={Blank} />
					<Route exact path="/channels/:serverId/:channelId" render={Chatbox} />
				</Switch>
			</div>
		);
	}
}
		

export default MainContentComponent;
