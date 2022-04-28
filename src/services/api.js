import fetch from 'isomorphic-fetch';
import 'es6-promise';

// CONSTANTS *****************************************************************
// const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const SERVER_URL = "http://localhost:3001";


// FUNCTIONS *****************************************************************
export function apiCall(method, path, data=undefined) {
  let authToken;
  let mode = path.split('/').pop();
  if (mode !== 'signin' && mode !=='register') {
    // Get token and userId from localStorage for authorization.
    authToken = "Bearer " + localStorage.getItem('jwtToken');
  }

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
    // No error, no status code, so return any message.
    if (data.status !== 200 && data.status !== undefined) {
      throw new Error(data.message);
    }
    return data;
  }).catch(error => {
    throw new Error(error.message);
  });
}

