import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { clearCurrentUserFail } from '../store/actions/auth';

import ModalForm from '../components/ModalForm';


const mapStateToProps = state => {
	return { 
		error: state.error,
	};
}

const mapDispatchToProps = dispatch => {
	return {
    clearError: () => dispatch(clearCurrentUserFail()),
	};
}


export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps,
)(ModalForm));
