import { combineReducers } from 'redux';

// Reducers
import userReducer from './userReducer';
import loanReducer from './loanReducer';
import alertReducer from './alertReducer';

const reducers = combineReducers({
  userReducer,
  loanReducer,
  alertReducer,
});

export default reducers;
