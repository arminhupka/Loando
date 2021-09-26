import axios from 'axios';

const token = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null;

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'x-auth-token': token,
  },
});

export default api;
