import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import configureStore from '../store';

// containers
import SignIn from './SignIn';
import Register from './Register';
import Home from './Home';
import Launch from '../containers/Launch';

// functions and utils
import { getUser } from '../store/actions/auth';

import AuthRoute from '../utils/AuthRoute';

// styles
import '../styles/App.css';


const store = configureStore();

const token = localStorage.getItem('jwtToken');
if (token) {
	const userId = JSON.parse(localStorage.getItem('currentUser'));
  store.dispatch(getUser(userId));
}


class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
          <div className="App">
            <Switch>
              <Route exact path="/" render={Launch} />
              <Route exact path="/signin" render={SignIn} />
              <Route exact path="/register" render={Register} />
							<AuthRoute 
                exact path="/channels/:serverId" 
                component={Home} 
              />
							<AuthRoute 
                exact path="/channels/:serverId/:channelId"
                component={Home} 
              />
							<AuthRoute 
                exact path="/activity"
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
