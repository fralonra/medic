import { createActions } from 'redux-actions';

export const types = {
  QUERY_START: 'QUERY_START',
  QUERY_DONE: 'QUERY_DONE',
  QUERY_KEYWORD_SET: 'QUERY_KEYWORD_SET'
};

export default createActions({
  [types.QUERY_START]: data => data,
  [types.QUERY_DONE]: data => data,
  [types.QUERY_KEYWORD_SET]: data => data
});
