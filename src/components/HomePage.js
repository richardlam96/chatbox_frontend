import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navbar from './Navbar';
import ServerNav from '../containers/ServerNav';
import ServerMain from '../containers/ServerMain';
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
		return (
			<div className="homepage">
				<Navbar />
				<p>HomePage</p>
				<ServerNav />
				<Route path="/channels/:serverId" render={ServerMain} />
			</div>
		);
	}
}


export default HomePage;
