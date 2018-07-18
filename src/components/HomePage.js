import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import ServerNav from '../containers/ServerNav';
import Blank from '../containers/Blank';
import '../styles/HomePage.css';


class HomePage extends Component {
	constructor(props) {
		super(props);
	}

	async componentWillMount() {
		let { indexServers, currentUser } = this.props;
		await indexServers(currentUser.id);
	}

	render() {
	// This should have a different main, ie HomeMain
		return (
			<div className="homepage">
				<Navbar />
				<p>HomePage</p>
				<ServerNav />
				<Switch>
					<Route path="/activity" render={Blank} />
					<Route path="/home/:serverId" render={Blank} />
				</Switch>
			</div>
		);
	}
}


export default HomePage;
