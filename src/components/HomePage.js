import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ServerNav from '../containers/ServerNav';
import '../styles/HomePage.css';

// To be later replaced by UserControl.
import Navbar from './Navbar';

// Placeholder component.
import Blank from '../containers/Blank';

// Component in current progress.
import ControlPane from '../containers/ControlPane';



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
		return (
			<div className="homepage">
				<Navbar />
				<ServerNav />
				<Switch className="control-pane">
					<Route exact path="/channels/:serverId/:channelId" render={ControlPane} />
					<Route exact path="/channels/:serverId" render={ControlPane} />
					<Route exact path="/activity" render={Blank} />
				</Switch>
				<Switch className="main-content">
					<Route exact path="/channels/:serverId" render={Blank} />
					<Route exact path="/channels/:serverId/:channelId" render={Blank} />
				</Switch>
			</div>
		);
	}
}


export default HomePage;
