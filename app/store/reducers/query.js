import { handleActions } from 'redux-actions';
import { actionTypes as actions } from 'APP/store/actions';

const initialState = {
  keyword: '',
  entries: []
};

const reducers = handleActions({
  [actions.QUERY_DONE] (state, action) {
    return {
      ...state,
      entries: action.payload
    };
  },
  [actions.QUERY_KEYWORD_SET] (state, action) {
    return {
      ...state,
      keyword: action.payload
    };
  }
}, initialState);

export default reducers;
