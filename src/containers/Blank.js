import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BlankPage from '../components/BlankPage';


const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
		serversById: state.currentUserServers.serversById,
  };
}

const mapDispatchToProps = dispatch => {
  return {};
}


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(BlankPage));
