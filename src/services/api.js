import axios from 'axios';


export function apiCall(method, path, data) {
	return axios[method](path, data).then(res => {
		return res.data;
	}).catch(error => {
    throw {
      ...error.response.data,
    };
  });
}


