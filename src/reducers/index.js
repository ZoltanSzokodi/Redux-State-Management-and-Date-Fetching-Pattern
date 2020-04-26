import authReducer from './auth';
import counterReducer from './counter';
import usersReducer from './users';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  counter: counterReducer,
  users: usersReducer,
});

export default rootReducer;
