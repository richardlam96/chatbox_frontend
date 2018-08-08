import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ServerNav from '../containers/ServerNav';
import ControlPane from '../containers/ControlPane';
import MainContent from '../containers/MainContent';
import '../styles/HomePage.css';

// Placeholder component.
import Blank from '../containers/Blank';

// Component in current progress.

class HomePage extends Component {
	async componentDidMount() {
		let {
			currentUser,
			indexServers,
			indexChannels,
			indexUsers,
		} = this.props;
		await indexUsers();
		await indexServers(currentUser.id);
    await indexChannels(currentUser.id);
	}

	render() {
		return (
			<div className="homepage">
				<ServerNav />
				<Switch className="control-pane">
					<Route path="/channels/:serverId" render={ControlPane} />
					<Route exact path="/activity" render={Blank} />
				</Switch>
				<MainContent />
			</div>
		);
	}
}


export default HomePage;
