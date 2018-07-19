import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Chatbox from '../containers/Chatbox';

import Blank from '../containers/Blank';

class MainContentComponent extends Component {
	constructor(props) {
		super(props);
	}

	async componentDidMount() {
		let {
			currentUser,
			indexMessages,
			match: { params, path },
		} = this.props;
		console.log(params, path);
		if (params.channelId) {
		}
	}

	render() {
		console.log(this.props.match.params, this.props.match.path);
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
