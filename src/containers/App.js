import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from '../store';
import HomepageContainer from './HomepageContainer';


const store = configureStore();

const App = () => (
	<Provider store={store}>
		<BrowserRouter>
			<HomepageContainer />
		</BrowserRouter>
	</Provider>
);

export default App;
