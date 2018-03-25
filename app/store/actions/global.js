import { createActions } from 'redux-actions';

export const types = {
  FETCH_START: 'FETCH_START',
  FETCH_END: 'FETCH_END',
  MESSAGE_SET: 'MESSAGE_SET'
};

export default createActions({
  [types.FETCH_START]: () => {},
  [types.FETCH_END]: () => {},
  [types.MESSAGE_SET]: message => message
});
