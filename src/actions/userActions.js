import api from '../utils/api';
import { addAlert } from './alertActions';
import {
  USER_LOGIN_FAILED,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAILED,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_AUTH,
} from './types';
import setAuthToken from '../utils/setAuthToken';

export const userRegister = (email, password, firstName, lastName, pesel, street, city, postalCode) => async (dispatch) => {
  dispatch({
    type: USER_REGISTER_REQUEST,
  });

  try {
    const { data } = await api({
      method: 'POST',
      url: '/user/register',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        email,
        password,
        firstName,
        lastName,
        pesel,
        street,
        city,
        postalCode,
      },
    });
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: USER_REGISTER_FAILED,
    });
  }
};

export const userLogin = (email, password) => async (dispatch) => {
  dispatch({
    type: USER_LOGIN_REQUEST,
  });

  try {
    const { data } = await api({
      url: '/user/login',
      method: 'POST',
      data: {
        email,
        password,
      },
    });

    setAuthToken(data.token);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
  } catch (err) {
    if (!err.response) {
      dispatch(addAlert('Problem podczas łączenia z serwerem', 'error'));
    }

    if (err.response.status === 404) {
      dispatch(addAlert('Nie znaleziono takiego użytkownika', 'warning'));
    }

    dispatch({
      type: USER_LOGIN_FAILED,
    });
  }
};

export const userLogout = () => {
  return {
    type: USER_LOGOUT,
  };
};

export const authUser = () => async (dispatch) => {
  try {
    const { data } = await api({
      url: '/user/auth',
      method: 'GET',
    });

    dispatch({
      type: USER_AUTH,
      payload: data,
    });
  } catch (err) {
    if (err.response.status === 401) {
      dispatch({
        type: USER_LOGOUT,
      });
    }
  }
};
