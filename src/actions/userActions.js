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
  USER_AUTH_REQUEST,
  USER_AUTH_SUCCESS,
  USER_CHANGE_PASSWORD_REQUEST,
  USER_CHANGE_PASSWORD_SUCCESS,
  USER_CHANGE_PASSWORD_FAILED,
  USER_CHANGE_PASSWORD_RESET,
  USER_BANK_CHANGE_REQUEST,
  USER_BANK_CHANGE_FAILED,
  USER_BANK_CHANGE_SUCCESS,
} from './types';
import setAuthToken from '../utils/setAuthToken';

export const userRegister =
  (firstName, lastName, pesel, id, phone, street, houseNumber, flatNumber, city, postalCode, email, password) =>
  async (dispatch) => {
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
          firstName,
          lastName,
          pesel,
          id,
          phone,
          street,
          houseNumber,
          flatNumber,
          city,
          postalCode,
          email,
          password,
        },
      });
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      });

      dispatch(addAlert('Rejestracja zakończona pomyślnie', 'success'));
    } catch (err) {
      dispatch({
        type: USER_REGISTER_FAILED,
      });

      if (err.response && err.response.status === 409) {
        dispatch(addAlert('Użytkownik o podanych danych już istnieje', 'warning'));
      }
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
  dispatch({
    type: USER_AUTH_REQUEST,
  });

  const { data } = await api({
    url: '/user/auth',
    method: 'GET',
  });

  dispatch({
    type: USER_AUTH_SUCCESS,
    payload: data,
  });
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
    if (err.response.status === 403) {
      dispatch({
        type: USER_CHANGE_PASSWORD_FAILED,
      });
      dispatch(addAlert('Twoje obecne hasło jest nieprawidłowe', 'error'));
    }
  }
};

export const resetUserPasswordState = () => (dispatch) => {
  dispatch({
    type: USER_CHANGE_PASSWORD_RESET,
  });
};

export const changeAccountNumber = (number) => async (dispatch) => {
  dispatch({
    type: USER_BANK_CHANGE_REQUEST,
  });

  try {
    await api({
      url: '/user/change-account-number',
      method: 'PUT',
      data: {
        number,
      },
    });

    dispatch(authUser());

    dispatch({
      type: USER_BANK_CHANGE_SUCCESS,
    });

    dispatch(addAlert('Zmieniono numer rachunku', 'success'));
  } catch (err) {
    dispatch({
      type: USER_BANK_CHANGE_FAILED,
    });

    dispatch(addAlert('Wystąpił błąd podczas zmiany hasła', 'error'));
  }
};
