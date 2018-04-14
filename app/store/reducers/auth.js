import { handleActions } from 'redux-actions';
import { actionTypes as actions } from 'APP/store/actions';

const initialUser = {
 name: null
};

const initialState = {
  user: initialUser
};

const reducers = handleActions({
  [actions.USER_INFO] (state, action) {
    return {
      ...state,
      user: action.payload
    };
  },
  [actions.USER_LOGIN] (state, action) {
    return {
      ...state,
      user: action.payload
    };
  },
  [actions.USER_LOGOUT] (state, action) {
    return {
      ...state,
      user: initialUser
    };
  },
  [actions.USER_SIGNUP] (state, action) {
    return {
      ...state,
      user: action.payload
    };
  }
}, initialState);

export default reducers;
