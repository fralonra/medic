import { call, put, takeLatest } from 'redux-saga/effects';
import sha256 from 'crypto-js/sha256';

import { actionTypes } from 'APP/store/actions';
import { authTypes, messageTypes } from 'APP/store/types';
import { get, post } from 'APP/lib/fetch';
import { api } from 'APP/config';

export default function* authSagas() {
  yield takeLatest(actionTypes.USER_AUTH, userAuth);
}

function* userAuth(data) {
  const type = data.payload.type;
  yield put({type: actionTypes.FETCH_START});
  try {
    const res = yield call(userAuthRequest, type, data.payload);
    if (!res.error) {
      yield call(userAuthHandle, type, res.user);
    } else {
      yield put({
        type: actionTypes.MESSAGE_SET,
        message: {
          type: messageTypes.ERROR,
          text: `Auth failed: ${res.error}`
        }
      });
    }
  } catch (error) {
  } finally {
    yield put({type: actionTypes.FETCH_END});
  }
}

function* userAuthRequest(type, data) {
  switch (type) {
    case authTypes.INFO:
      return yield call(userInfo);
    case authTypes.LOGIN:
      return yield call(userLogin, data);
    case authTypes.LOGOUT:
      return yield call(userLogout, data);
    case authTypes.SIGNUP:
      return yield call(userSignup, data);
    default:
      return null;
  }
}

function* userAuthHandle(type, data) {
  switch (type) {
    case authTypes.INFO:
      return yield put({
        type: actionTypes.USER_INFO,
        payload: data
      });
    case authTypes.LOGIN:
      return yield put({
        type: actionTypes.USER_LOGIN,
        payload: data
      });
    case authTypes.LOGOUT:
      return yield put({
        type: actionTypes.USER_LOGOUT,
        payload: data
      });
    case authTypes.SIGNUP:
      return yield put({
        type: actionTypes.USER_SIGNUP,
        payload: data
      });
    default:
      return null;
  }
}

function* userInfo() {
  try {
    return yield call(get, api.userInfo);
  } catch (error) {
    yield put({
      type: actionTypes.MESSAGE_SET,
      message: {
        type: messageTypes.ERROR,
        text: `Auth failed: ${error}`
      }
    });
  } finally {
  }
}

function* userLogin(data) {
  try {
    return yield call(post, api.userLogin, buildUser(data));
  } catch (error) {
    yield put({
      type: actionTypes.MESSAGE_SET,
      message: {
        type: messageTypes.ERROR,
        text: `Login failed: ${error}`
      }
    });
  } finally {
  }
}

function* userLogout(data) {
  try {
    return yield call(post, api.userLogout, data);
  } catch (error) {
    yield put({
      type: actionTypes.MESSAGE_SET,
      message: {
        type: messageTypes.ERROR,
        text: `Logout failed: ${error}`
      }
    });
  } finally {
  }
}

function* userSignup(data) {
  try {
    return yield call(post, api.userSignup, buildUser(data));
  } catch (error) {
    yield put({
      type: actionTypes.MESSAGE_SET,
      message: {
        type: messageTypes.ERROR,
        text: `Sign up failed: ${error}`
      }
    });
  } finally {
  }
}

function buildUser(data) {
  const hash = sha256(data.password).toString();
  return {
    username: data.username,
    password: hash
  };
}
