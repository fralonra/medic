import { handleActions } from 'redux-actions';
import { actionTypes as actions } from 'APP/store/actions';

const initialQuery = {
 keyword: '',
 result: []
};

const initialState = {
  query: initialQuery
};

const reducers = handleActions({
  [actions.QUERY_DONE] (state, action) {
    return {
      ...state,
      query: action.payload
    };
  }
}, initialState);

export default reducers;
