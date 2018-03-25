import { call, put, takeLatest } from 'redux-saga/effects';

import { actionTypes } from 'APP/store/actions';
import { authTypes, messageTypes } from 'APP/store/types';
import { post } from 'APP/lib/fetch';
import { api } from 'APP/config';

export default function* authSagas() {
  /* while (true) {
    let request = yield take(IndexActionTypes.USER_LOGIN);
    let response = yield call(login, request.username, request.password);
    if(response&&response.code === 0){
      yield put({type:IndexActionTypes.SET_MESSAGE,msgContent:'登录成功!',msgType:1});
      yield put({type:IndexActionTypes.RESPONSE_USER_INFO,data:response.data})
    }
  }
  //yield* [
    while (true) {
      const action = yield take(actionTypes.USER_LOGIN);
      yield fork(userLogin, action.username, action.password);
    }*/
  //];
  yield takeLatest(actionTypes.USER_AUTH, userAuth);
  //yield takeLatest(actionTypes.USER_LOGIN, userLogin);
  //yield takeLatest(actionTypes.USER_LOGOUT, userLogout);
  //yield takeLatest(actionTypes.USER_SIGNUP, userSignup);
}

function* userAuth(data) {
  const type = data.type;
  yield put({type: actionTypes.FETCH_START});
  try {
    return yield call(post, api.userLogin, data);
  } catch (error) {
    yield put({
      type: actionTypes.MESSAGE_SET,
      message: {
        type: messageTypes.ERROR,
        text: `Auth failed: ${error}`
      }
    });
  } finally {
    yield put({type: actionTypes.FETCH_END});
  }
}

function* userLogin(data) {
  yield put({type: actionTypes.FETCH_START});
  try {
    return yield call(post, api.userLogin, data);
  } catch (error) {
    yield put({
      type: actionTypes.MESSAGE_SET,
      message: {
        type: messageTypes.ERROR,
        text: `Login failed: ${error}`
      }
    });
  } finally {
    yield put({type: actionTypes.FETCH_END});
  }
}

function* userLogout(username) {
  yield put({type: actionTypes.FETCH_START});
  try {
    return yield call(post, api.userLogout, username);
  } catch (error) {
    yield put({
      type: actionTypes.MESSAGE_SET,
      message: {
        type: messageTypes.ERROR,
        text: `Logout failed: ${error}`
      }
    });
  } finally {
    yield put({type: actionTypes.FETCH_END});
  }
}

function* userSignup(data) {
  yield put({type: actionTypes.FETCH_START});
  try {
    return yield call(post, api.userSignup, data);
  } catch (error) {
    yield put({
      type: actionTypes.MESSAGE_SET,
      message: {
        type: messageTypes.ERROR,
        text: `Sign up failed: ${error}`
      }
    });
  } finally {
    yield put({type: actionTypes.FETCH_END});
  }
}
