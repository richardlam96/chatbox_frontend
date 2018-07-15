import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import configureStore from '../store';

// containers
import SignIn from './SignIn';
import Register from './Register';
import Home from './Home';

// components
import LaunchPage from '../components/LaunchPage';

// functions and utils
import { authCurrentUser } from '../store/actions/auth';
import AuthRoute from '../utils/AuthRoute';

// styles
import '../styles/App.css';


const store = configureStore();
const token = localStorage.getItem('jwtToken');
if (token) {
  store.dispatch(authCurrentUser());
}

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
          <div className="App">
            <Switch>
              <Route exact path="/" render={LaunchPage} />
              <Route exact path="/signin" render={SignIn} />
              <Route exact path="/register" render={Register} />
              <AuthRoute 
                exact path="/welcome" 
                component={Home} 
              />
            </Switch>
          </div>
				</BrowserRouter>
			</Provider>
		);
	}
};


export default App;
