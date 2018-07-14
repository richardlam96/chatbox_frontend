import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { signoutUser } from '../store/actions/auth';

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(signoutUser()),
  };
}


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar));
