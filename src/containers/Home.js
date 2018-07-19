import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { indexUserServers } from '../store/actions/server';
import { indexUserChannels } from '../store/actions/channel';
import HomePage from '../components/HomePage';


const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
		state,
  };
}

const mapDispatchToProps = dispatch => {
  return {
		indexServers: (userId) => dispatch(indexUserServers(userId)),
		indexChannels: (userId) => dispatch(indexUserChannels(userId)),
    sayHello: () => console.log('hello'),
	};
}


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage));
