import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HomePage from '../components/HomePage';


const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
  };
}

const mapDispatchToProps = dispatch => {
  return {};
}


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage));
