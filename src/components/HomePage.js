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

	componentWillMount() {
		let { indexServers, currentUser } = this.props;
		indexServers(currentUser.id);
	}

	render() {
		console.log(this.props.state);
		// Focus on just rendering the Server Components of the app.
		return (
			<div className="homepage">
				<Navbar />
				<ServerNav />
				<Switch>
					<Route path="/channels/:serverId" render={ControlPane} />
					<Route exact path="/activity" render={Blank} />
				</Switch>
				<Blank />
			</div>
		);
	}
}


export default HomePage;
