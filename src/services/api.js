import axios from 'axios';


export function apiCall(method, path, data) {
	return axios[method](path, data).then(res => {
		return res.data.json();
	}).catch(err => {
		return err.response.data.json();
	});
}


