import React, { Component } from 'react';
import ServerNav from '../containers/ServerNav';
import ControlPane from '../containers/ControlPane';
import MainContent from '../containers/MainContent';
import '../styles/HomePage.css';


class HomePage extends Component {

  componentWillMount() {
    this.props.clearError();
  }

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
				<ControlPane />
				<MainContent />
			</div>
		);
	}
}


export default HomePage;
