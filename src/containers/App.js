import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import configureStore from '../store';

// containers
import Auth from './Auth';
import Blank from './Blank';
import SignIn from './SignIn';
import Register from './Register';
import Home from './Home';

// components
import LaunchPage from '../components/LaunchPage';

// functions and utils
import { authCurrentUser } from '../store/actions/auth';
import AuthRoute from '../utils/AuthRoute';


const store = configureStore();
const token = localStorage.getItem('jwtToken');
if (token) {
  store.dispatch(authCurrentUser());
  console.log(store.getState());
}

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>

          <Switch>
            <Route exact path="/" render={LaunchPage} />
            <Route exact path="/signin" render={SignIn} />
            <Route exact path="/register" render={Register} />
            <Route exact path="/welcome" render={Home} />
          </Switch>

				</BrowserRouter>
			</Provider>
		);
	}
};


// TEMPORARY same-file components ____________________________________________
// Basic structure of the Auth UI feature.

// const Main = (props) => (
// 	<div>
// 		<Switch>
// 			<Route exact path="/" render={LaunchPage} />
// 			<Route exact path="/:authMode" render={AuthPage} />
// 		</Switch>
// 	</div>
// );
// 
// const LaunchPage = ({ match }) => (
// 	<div>
// 		<p>Route: {match.path}</p>
// 		<p>This is the Launch Page</p>
// 		<Link to="/signin">Go to Sign In page</Link>
// 		<Link to="/register">Go to Register page</Link>
// 	</div>
// );
// 
// const AuthPage = ({ match }) => {
// 	var link;
// 	if (match.params.authMode === "signin") {
// 		link = <Link to="/register">Register for an account</Link>
// 	} else {
// 		link = <Link to="/signin">Sign in to your account</Link>
// 	}
// 
// 	return (
// 		<div>
// 			<Link to="/">Home</Link>
// 			<p>Auth Mode: {match.params.authMode}</p>
// 			<p>This is the {match.params.authMode} page</p>
// 			{link}
// 		</div>
// 	);
// }
// 
















export default App;
