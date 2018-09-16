import React, { Component } from 'react';
import ServerNav from '../containers/ServerNav';
import ControlPane from '../containers/ControlPane';
import MainContent from '../containers/MainContent';
import '../styles/HomePage.css';


class HomePage extends Component {

  componentWillMount() {
    this.props.clearError();
  }

	componentDidMount() {
		let {
			currentUser,
			indexServers,
			indexChannels,
      indexFriends,
		} = this.props;

		indexServers(currentUser._id);
    indexChannels(currentUser._id);
    indexFriends(currentUser._id);
	}

	render() {
    let {
      friendsFetching,
      channelFetching,
      serverFetching,
    } = this.props;

		return (
      !friendsFetching && !channelFetching && !serverFetching &&
			<div className="homepage">
				<ServerNav />
				<ControlPane />
				<MainContent />
			</div>
		);
	}
}


export default HomePage;
