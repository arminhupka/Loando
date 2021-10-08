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
  USER_CHANGE_PASSWORD_REQUEST,
  USER_CHANGE_PASSWORD_SUCCESS,
  USER_CHANGE_PASSWORD_FAILED,
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

    localStorage.setItem('token', JSON.stringify(data.token));
    setAuthToken(data.token);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
  } catch (err) {
    if (!err.response) {
      dispatch(addAlert('Problem podczas łączenia z serwerem', 'error'));
    }

    if (err.response && err.response.status === 404) {
      dispatch(addAlert('Nie ma takiego użytkownika lub hasło jest nieoprawne', 'warning'));
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
    if (err.response && err.response.status === 401) {
      dispatch({
        type: USER_LOGOUT,
      });
    }
  }
};

export const changePassword = (currentPassword, newPassword) => async (dispatch) => {
  dispatch({
    type: USER_CHANGE_PASSWORD_REQUEST,
  });

  try {
    await api({
      url: '/user/change-password',
      method: 'PUT',
      data: {
        currentPassword,
        password: newPassword,
      },
    });

    dispatch({
      type: USER_CHANGE_PASSWORD_SUCCESS,
    });

    dispatch(addAlert('Hasło zostało zmienione', 'success'));
  } catch (err) {
    dispatch({
      type: USER_CHANGE_PASSWORD_FAILED,
    });
    dispatch(addAlert('Wystąpił błąd podczas zmiany hasła', 'error'));
  }
};
