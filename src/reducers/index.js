import { combineReducers } from 'redux';

// Reducers
import userReducer from './userReducer';

const reducers = combineReducers({
  userReducer,
});

export default reducers;
