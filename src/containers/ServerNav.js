import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ServerNavComponent from '../components/ServerNavComponent';


const mapStateToProps = state => {
	return { 
		currentUser: state.currentUser,
		servers: state.currentUserServers,
	};
}

const mapDispatchToProps = dispatch => {
	return {
	};
}


export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps,
)(ServerNavComponent));
