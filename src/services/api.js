import fetch from 'isomorphic-fetch';
import 'es6-promise';


const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export function apiCall(method, path, data=undefined) {
	const authToken = "Bearer " + localStorage.getItem('jwtToken');
  console.log('SERVER', process.env.REACT_APP_SERVER_URL);
	return fetch(SERVER_URL + path, {
		method,
		headers: {
			"Content-Type": "application/json; charset=utf-8",
			"Authorization": authToken,
		},
		body: JSON.stringify(data),
	}).then(response => {
		return response.json();
	}).then(data => {
		// If there is no error, there will not be a status code
		if (data.status !== 200 && data.status !== undefined) {
			throw new Error(data.message);
		}
		return data;
	}).catch(error => {
		throw new Error(error.message);
	});
}
		
