import React, { Component } from 'react';
import Navbar from './Navbar';
import ServerNavComponent from './ServerNavComponent';
import '../styles/HomePage.css';


class HomePage extends Component {
	constructor(props) {
		super(props);
	}

	async componentsDidMount() {
		let { indexServers, currentUser } = this.props;
		await indexServers(currentUser.id);
	}

	render() {
		console.log(this.props);
		return (
			<div className="homepage">
				<Navbar />
				<p>HomePage</p>
				<ServerNavComponent />
			</div>
		);
	}
}


export default HomePage;
