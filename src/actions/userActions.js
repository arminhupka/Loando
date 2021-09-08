import api from '../utils/api';
import { USER_REGISTER_FAILED, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from './types';

// eslint-disable-next-line import/prefer-default-export
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
