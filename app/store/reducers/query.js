import { handleActions } from 'redux-actions';
import { actionTypes as actions } from 'APP/store/actions';

import { mapArrToObj } from 'APP/lib';

const initialState = {
  entries: {}
};

const reducers = handleActions({
  [actions.QUERY_DONE] (state, action) {
    return {
      ...state,
      entries: mapArrToObj(action.payload, 'title', a => a)
    };
  }
}, initialState);

export default reducers;
