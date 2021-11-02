// Utils
import api from '../utils/api';

// Types
import {
  LOAN_SET,
  NEW_LOAN_REQUEST,
  NEW_LOAN_SUCCESS,
  NEW_LOAN_FAILED,
  NEW_LOAN_RESET,
  LOAN_DETAILS_REQUEST,
  LOAN_DETAILS_SUCCESS,
  LOAN_DETAILS_FAILED,
  LOAN_PAY_REQUEST,
  LOAN_PAY_SUCCESS,
  LOAN_PAY_FAILED,
  LOAN_PAY_CLEAR,
  LOAN_LIST_REQUEST,
  LOAN_LIST_SUCCESS,
  LOAN_LIST_FAILED,
  LOAN_LIST_RESET,
} from './types';

// Actions
import { addAlert } from './alertActions';

export const setLoan = (days, value) => (dispatch) => {
  dispatch({
    type: LOAN_SET,
    payload: {
      days,
      value,
    },
  });
};

export const takeNewLoan = () => async (dispatch, getState) => {
  const {
    loanReducer: { loanSettings },
  } = getState();

  dispatch({
    type: NEW_LOAN_REQUEST,
  });

  try {
    const { data } = await api({
      url: '/loan/new',
      method: 'POST',
      data: {
        value: loanSettings.value,
        days: loanSettings.days,
      },
    });

    dispatch({
      type: NEW_LOAN_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: NEW_LOAN_FAILED,
    });
  }
};

export const resetNewLoan = () => (dispatch) => {
  dispatch({
    type: NEW_LOAN_RESET,
  });
};

export const getLoanDetails = (id) => async (dispatch) => {
  dispatch({
    type: LOAN_DETAILS_REQUEST,
  });

  try {
    const { data } = await api({
      url: `/loan/${id}`,
      method: 'GET',
    });

    dispatch({
      type: LOAN_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOAN_DETAILS_FAILED,
    });
  }
};

export const resetLoansList = () => (dispatch) => {
  dispatch({
    type: LOAN_LIST_RESET,
  });
};

export const getLoansList = () => async (dispatch) => {
  dispatch({
    type: LOAN_LIST_REQUEST,
  });

  try {
    const { data } = await api.get('/loan');

    dispatch({
      type: LOAN_LIST_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOAN_LIST_FAILED,
    });

    if (err.response.status === 401) {
      dispatch(addAlert('Sesja wygasła', 'error'));
    }
  }
};

export const payLoan = (id, value) => async (dispatch) => {
  dispatch({
    type: LOAN_PAY_REQUEST,
  });

  try {
    const { data } = await api({
      url: '/loan/pay',
      method: 'PUT',
      data: {
        id,
        value,
      },
    });

    dispatch({
      type: LOAN_PAY_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOAN_PAY_FAILED,
    });
  }
};

export const cleanPaidLoan = () => (dispatch) => {
  dispatch({
    type: LOAN_PAY_CLEAR,
  });
};
