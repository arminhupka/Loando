import { LOAN_SET } from '../actions/types';

const initialState = {
  newLoan: {
    value: 0,
    days: 0,
  },
};

const loanReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAN_SET: {
      return {
        newLoan: {
          value: payload.value,
          days: payload.days,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default loanReducer;
