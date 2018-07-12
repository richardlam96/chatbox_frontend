import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from '../store';
import Navbar from './Navbar';
import Main from './Main';


const store = configureStore();

const App = () => (
	<Provider store={store}>
		<BrowserRouter>
			<div className="homepage">
				<Navbar />
				<Main />
			</div>
		</BrowserRouter>
	</Provider>
);

export default App;
