import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ServerNav from '../containers/ServerNav';
import ControlPane from '../containers/ControlPane';
import '../styles/HomePage.css';

// To be later replaced by UserControl.
import Navbar from './Navbar';

// Placeholder component.
import Blank from '../containers/Blank';

// Component in current progress.
import Chatbox from '../containers/Chatbox';


class HomePage extends Component {
	constructor(props) {
		super(props);
	}

	async componentDidMount() {
		let {
			currentUser,
			indexServers,
			indexChannels,
		} = this.props;
		await indexServers(currentUser.id);
    await indexChannels(currentUser.id);
	}

	render() {
		// Focus on just rendering the Server Components of the app.

		// // Logic to only allow paths with existing serverId and channelId.
		// let {
		// 	serverIds,
		// 	channelIds,
		// 	match: { params },
		// } = this.props;

		// // If serverId is invalid, 
		// if (serverIds.indexOf(params.serverId) === -1) {

		// 	return <Redirect 
		// 	
		// 	&&
		// 		channelIds.indexOf(params.channelId) === -1

		return (
			<div className="homepage">
				<Navbar />
				<ServerNav />
				<Switch className="control-pane">
					<Route path="/channels/:serverId" render={ControlPane} />
					<Route exact path="/activity" render={Blank} />
				</Switch>
				<Switch className="chatbox">
					<Route exact path="/channels/:serverId/:channelId" render={Chatbox} />
				</Switch>
			</div>
		);
	}
}


export default HomePage;
