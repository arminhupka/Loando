import { combineReducers } from 'redux';

// Reducers
import userReducer from './userReducer';
import loanReducer from './loanReducer';

const reducers = combineReducers({
  userReducer,
  loanReducer,
});

export default reducers;
