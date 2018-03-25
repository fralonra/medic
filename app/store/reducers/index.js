import { combineReducers } from 'redux';

import global from './global';
import auth from './auth';

const reducers = combineReducers({
  global,
  auth
});

export default reducers;
