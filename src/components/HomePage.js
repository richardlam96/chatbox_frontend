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
        <ControlPane />
        <Blank />
			</div>
		);
	}
}


export default HomePage;
