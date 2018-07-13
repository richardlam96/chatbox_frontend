import axios from 'axios';


export function apiCall(method, path, data) {
	return axios[method](path, data).then(res => {
		return res.data.json();
	}).catch(err => {
		console.log(err);
		return {
			status: err.request.status,
			message: err.message,
		}
	});
}


