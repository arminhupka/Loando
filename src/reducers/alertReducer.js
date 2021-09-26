import { ALERT_ADD, ALERT_REMOVE, ALERT_RESET } from '../actions/types';

const initialState = [];

const alertReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ALERT_ADD: {
      return [...state, payload];
    }
    case ALERT_REMOVE: {
      return state.filter((alert) => alert.id === payload);
    }
    case ALERT_RESET: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default alertReducer;
