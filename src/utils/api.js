import axios from 'axios';
import store from '../store';
import { USER_LOGOUT, ALERT_ADD, ALERT_RESET } from '../actions/types';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (!err.response) {
      store.dispatch({
        type: ALERT_ADD,
        payload: {
          message: 'Brak połączenia z serwerem',
          type: 'error',
        },
      });

      setTimeout(() => {
        store.dispatch({
          type: ALERT_RESET,
        });
      }, 5000);
    }
    if (err.response.status === 401) {
      store.dispatch({ type: USER_LOGOUT });
      window.location.replace('/wyloguj');
    }
    return Promise.reject(err);
  },
);

export default api;
