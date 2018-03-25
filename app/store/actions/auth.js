import { createActions } from 'redux-actions';

export const types = {
  USER_AUTH: 'USER_AUTH',
  USER_LOGIN: 'USER_LOGIN',
  USER_LOGOUT: 'USER_LOGOUT',
  USER_SIGNUP: 'USER_SIGNUP'
};

export default createActions({
  [types.USER_AUTH]: data => data,
  [types.USER_LOGIN]: data => data,
  [types.USER_LOGOUT]: user => user,
  [types.USER_SIGNUP]: data => data
});
