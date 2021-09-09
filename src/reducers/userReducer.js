import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGOUT,
} from '../actions/types';

const initialState = {
  data: null,
  token: localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null,
  isLoading: false,
  isAuth: false,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_REGISTER_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case USER_REGISTER_SUCCESS: {
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    }
    case USER_REGISTER_FAILED: {
      return {
        ...state,
      };
    }
    case USER_LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case USER_LOGIN_SUCCESS: {
      localStorage.setItem('token', JSON.stringify(payload.token));
      return {
        data: payload,
        token: payload.token,
        isLoading: false,
        isAuth: true,
      };
    }
    case USER_LOGIN_FAILED: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case USER_LOGOUT: {
      localStorage.removeItem('token');
      return {
        ...state,
        data: null,
        token: null,
        isLoading: false,
        isAuth: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
