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
		} = this.props;

		await indexServers(currentUser._id);
    await indexChannels(currentUser._id);
	}

	render() {
    console.log(this.props.state);
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
