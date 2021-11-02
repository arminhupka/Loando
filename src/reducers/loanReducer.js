import {
  LOAN_DETAILS_FAILED,
  LOAN_DETAILS_REQUEST,
  LOAN_DETAILS_SUCCESS,
  LOAN_LIST_FAILED,
  LOAN_LIST_REQUEST,
  LOAN_LIST_RESET,
  LOAN_LIST_SUCCESS,
  LOAN_PAY_CLEAR,
  LOAN_PAY_FAILED,
  LOAN_PAY_REQUEST,
  LOAN_PAY_SUCCESS,
  LOAN_SET,
  NEW_LOAN_FAILED,
  NEW_LOAN_REQUEST,
  NEW_LOAN_RESET,
  NEW_LOAN_SUCCESS,
} from '../actions/types';

const initialState = {
  loanSettings: {
    value: 3000,
    days: 30,
  },
  newLoan: {
    isLoading: false,
    granted: null,
    data: null,
  },
  currentLoan: {
    data: null,
    isLoading: false,
  },
  paidLoan: {
    data: null,
    isLoading: false,
  },
  loans: {
    isLoading: false,
    data: [],
  },
};

const loanReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAN_SET: {
      return {
        ...state,
        loanSettings: {
          value: payload.value,
          days: payload.days,
        },
      };
    }
    case NEW_LOAN_REQUEST: {
      return {
        ...state,
        newLoan: {
          ...state.newLoan,
          isLoading: true,
        },
      };
    }
    case NEW_LOAN_SUCCESS: {
      return {
        ...state,
        newLoan: {
          ...state.newLoan,
          isLoading: false,
          granted: true,
          data: payload,
        },
      };
    }
    case NEW_LOAN_FAILED: {
      return {
        ...state,
        newLoan: {
          ...state.newLoan,
          isLoading: false,
          granted: false,
        },
      };
    }
    case NEW_LOAN_RESET: {
      return {
        ...state,
        newLoan: {
          ...initialState.newLoan,
        },
      };
    }
    case LOAN_DETAILS_REQUEST: {
      return {
        ...state,
        currentLoan: {
          data: null,
          isLoading: true,
        },
      };
    }
    case LOAN_DETAILS_SUCCESS: {
      return {
        ...state,
        currentLoan: {
          data: payload,
          isLoading: false,
        },
      };
    }
    case LOAN_DETAILS_FAILED: {
      return {
        ...state,
        currentLoan: {
          data: null,
          isLoading: false,
        },
      };
    }
    case LOAN_PAY_REQUEST: {
      return {
        ...state,
        paidLoan: {
          data: null,
          isLoading: true,
        },
      };
    }
    case LOAN_PAY_SUCCESS: {
      return {
        ...state,
        paidLoan: {
          data: payload,
          isLoading: false,
        },
      };
    }
    case LOAN_PAY_CLEAR:
    case LOAN_PAY_FAILED: {
      return {
        ...state,
        paidLoan: {
          data: null,
          isLoading: false,
        },
      };
    }
    case LOAN_LIST_REQUEST: {
      return {
        ...state,
        loans: {
          ...state.loans,
          isLoading: true,
        },
      };
    }
    case LOAN_LIST_SUCCESS: {
      return {
        ...state,
        loans: {
          isLoading: false,
          data: payload,
        },
      };
    }
    case LOAN_LIST_RESET:
    case LOAN_LIST_FAILED: {
      return {
        ...state,
        loans: initialState.loans,
      };
    }
    default: {
      return state;
    }
  }
};

export default loanReducer;
