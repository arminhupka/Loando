import { USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAILED } from '../actions/types';

const initialState = {
  data: null,
  isLoading: false,
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
        data: payload,
        isLoading: false,
      };
    }
    case USER_REGISTER_FAILED: {
      return {
        ...initialState,
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
