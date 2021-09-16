import { LOAN_SET } from './types';

// eslint-disable-next-line import/prefer-default-export
export const setLoan = (days, value) => (dispatch) => {
  dispatch({
    type: LOAN_SET,
    payload: {
      days,
      value,
    },
  });
};
