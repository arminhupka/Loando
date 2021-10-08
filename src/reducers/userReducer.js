import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGOUT,
  USER_AUTH,
  USER_CHANGE_PASSWORD_REQUEST,
  USER_CHANGE_PASSWORD_SUCCESS,
  USER_CHANGE_PASSWORD_FAILED,
} from '../actions/types';

const initialState = {
  data: null,
  token: null,
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
    case USER_CHANGE_PASSWORD_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case USER_CHANGE_PASSWORD_SUCCESS:
    case USER_CHANGE_PASSWORD_FAILED: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case USER_AUTH: {
      return {
        ...state,
        data: payload,
        isAuth: true,
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
