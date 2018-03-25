import { handleActions } from 'redux-actions';
import { actionTypes as actions } from 'APP/store/actions';

const initialUser = {
 id: 0,
 name: ''
};

const initialState = {
  user: initialUser
};

const reducers = handleActions({
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
