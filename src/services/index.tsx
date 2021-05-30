import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api';

export interface LoginDTO {
  email: string;
  password: string;
}

//@ts-ignore
export async function login(payload: LoginDTO) {
  const response = await axios.post('/login', payload);
  const { user } = response.data;
  return user;
}

//@ts-ignore
export async function logout(payload) {
  const response = await axios.post('/logout', null, {
    headers: {
      Authorization: 'Bearer ' + payload.token,
      Accept: '*/*'
    }
  });

  return response;
}
