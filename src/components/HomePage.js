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
	constructor(props) {
		super(props);
	}

	async componentDidMount() {
		let {
			currentUser,
			indexServers,
			indexChannels,
		} = this.props;
		console.log('getting servers');
		await indexServers(currentUser.id);
		console.log('getting channels');
    await indexChannels(currentUser.id);
	}

	render() {
		// Focus on just rendering the Server Components of the app.
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
