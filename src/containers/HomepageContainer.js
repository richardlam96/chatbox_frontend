import { connect } from 'react-redux';
import Homepage from '../components/Homepage';


const mapStateToProps = state => {
	return {
		currentUser: state.user,
	};
};


export default connect(
	mapStateToProps,
	null
)(Homepage);
