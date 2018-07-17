import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { indexUserServers } from '../store/actions/server';
import HomePage from '../components/HomePage';


const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
		servers: state.currentUserServers,
  };
}

const mapDispatchToProps = dispatch => {
  return {
		indexServers: (userId) => dispatch(indexUserServers(userId)),
	};
}


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage));
