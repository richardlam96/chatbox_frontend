import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
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
	// This should have a different main, ie HomeMain
		return (
			<div className="homepage">
				<Navbar />
				<p>HomePage</p>
				<ServerNav />
				<ServerMain /> 
			</div>
		);
	}
}


export default HomePage;
