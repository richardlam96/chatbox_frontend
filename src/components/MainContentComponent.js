import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Chatbox from '../containers/Chatbox';

import Blank from '../containers/Blank';

class MainContentComponent extends Component {
	constructor(props) {
		super(props);
	}

	async componentDidMount() {
		// let {
		// 	currentUser,
		// 	indexMessages,
		// 	match: { params, path },
		// } = this.props;
	}

	render() {
		return ( 
			<div className="main-content-component">
				<p>Main Content</p>
				<div className="main-content-header">
				</div>
				<Switch>
					<Route exact path="/channels/:serverId" render={Blank} />
					<Route exact path="/channels/:serverId/:channelId" render={Chatbox} />
				</Switch>
			</div>
		);
	}
}
		

export default MainContentComponent;
