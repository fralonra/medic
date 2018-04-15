import { combineReducers } from 'redux';

import global from './global';
import auth from './auth';
import entry from './entry';
import query from './query';

const reducers = combineReducers({
  global,
  auth,
  entry,
  query
});

export default reducers;
