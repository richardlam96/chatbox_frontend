import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { indexUsers } from '../store/actions/user';
import { indexUserServers } from '../store/actions/server';
import { indexUserChannels } from '../store/actions/channel';
import HomePage from '../components/HomePage';


const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
  };
}

const mapDispatchToProps = dispatch => {
  return {
		indexServers: (userId) => dispatch(indexUserServers(userId)),
		indexChannels: (userId) => dispatch(indexUserChannels(userId)),
		indexUsers: () => dispatch(indexUsers()),
	};
}


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage));
