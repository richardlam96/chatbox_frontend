import fetch from 'isomorphic-fetch';
import 'es6-promise';


export function apiCall(method, path, data) {
	const authToken = "Bearer " + localStorage.getItem('jwtToken');
	return fetch(path, {
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
		
