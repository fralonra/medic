import { handleActions } from 'redux-actions';
import { actionTypes as actions } from 'APP/store/actions';

const initialState = {
  current: ''
};

const reducers = handleActions({
  [actions.ENTRY_SET] (state, action) {
    return {
      ...state,
      current: action.payload
    };
  }
}, initialState);

export default reducers;
