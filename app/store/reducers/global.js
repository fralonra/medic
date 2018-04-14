import { handleActions } from 'redux-actions';
import actions from 'APP/store/actions';

const initialState = {
  isFetching: false,
  message: {
    type: 'INFO',
    autoHide: false,
    delay: 0,
    duration: 2000,
    text: ''
  }
};

const reducers = handleActions({
  [actions.fetchStart] (state, action) {
    return {
      ...state,
      isFetching: true
    };
  },
  [actions.fetchEnd] (state, action) {
    return {
      ...state,
      isFetching: false
    };
  },
  [actions.messageSet] (state, action) {
    return {
      ...state,
      message: {
        ...initialState.message,
        ...action.payload
      }
    };
  }
}, initialState);

export default reducers;
