import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ControlPaneComponent from '../components/ControlPaneComponent';


const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
  };
}

const mapDispatchToProps = dispatch => {
  return {
	};
}


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlPaneComponent));
