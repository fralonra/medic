import { combineReducers } from 'redux';

import global from './global';
import auth from './auth';
import query from './query';

const reducers = combineReducers({
  global,
  auth,
  query
});

export default reducers;
