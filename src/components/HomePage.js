import React, { Component } from 'react';
import Navbar from './Navbar';
import ServerNav from '../containers/ServerNav';
import '../styles/HomePage.css';


class HomePage extends Component {
	constructor(props) {
		super(props);
	}

	async componentWillMount() {
		console.log('wuut');
		let { indexServers, currentUser } = this.props;
		await indexServers(currentUser.id);
	}

	render() {
		console.log(this.props);
		return (
			<div className="homepage">
				<Navbar />
				<p>HomePage</p>
				<ServerNav />
			</div>
		);
	}
}


export default HomePage;
