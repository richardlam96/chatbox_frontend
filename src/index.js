import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { unregister } from './registerServiceWorker';
import './styles/index.css';

unregister();
ReactDOM.render(<App />, document.getElementById('root'));
