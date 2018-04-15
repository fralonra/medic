import { createActions } from 'redux-actions';

export const types = {
  ENTRY_DELETE: 'ENTRY_DELETE',
  ENTRY_POST: 'ENTRY_POST',
  ENTRY_PUT: 'ENTY_PUT',
  ENTRY_SET: 'ENTRY_SET'
};

export default createActions({
  [types.ENTRY_DELETE]: data => data,
  [types.ENTRY_POST]: data => data,
  [types.ENTRY_PUT]: data => data,
  [types.ENTRY_SET]: data => data
});
