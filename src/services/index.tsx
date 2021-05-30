import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api';

export function login(payload) {
  return axios.post('/login', {
    email: payload.email,
    password: payload.password
  });
}

export function logout(payload) {
  return axios.post('/logout', null, {
    headers: {
      Authorization: 'Bearer ' + payload.token,
      Accept: '*/*'
    }
  });
}
