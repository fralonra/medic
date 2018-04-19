import { call, put, takeLatest } from 'redux-saga/effects';

import { actionTypes } from 'APP/store/actions';
import { del, post, put as httpPut } from 'APP/lib/fetch';
import { api } from 'APP/config';

export default function* authSagas() {
  yield takeLatest(actionTypes.ENTRY_DELETE, delEntry);
  yield takeLatest(actionTypes.ENTRY_POST, postEntry);
  yield takeLatest(actionTypes.ENTRY_PUT, putEntry);
}

function* delEntry(data) {
  yield put({type: actionTypes.FETCH_START});
  try {
    const res = yield call(del, api.entry);
    if (!res.error) {
      yield put({
        type: actionTypes.MESSAGE_SET,
        message: {
          type: messageTypes.INFO,
          text: `Delete entry succeeded: ${data.title}`
        }
      });
    } else {
      yield put({
        type: actionTypes.MESSAGE_SET,
        message: {
          type: messageTypes.ERROR,
          text: `Delete entry failed: ${res.error}`
        }
      });
    }
  } catch (error) {
  } finally {
    yield put({type: actionTypes.FETCH_END});
  }
}

function* postEntry(data) {
  yield put({type: actionTypes.FETCH_START});
  try {
    const res = yield call(post, api.entry, data.payload);
    if (!res.error) {
      yield put({
        type: actionTypes.MESSAGE_SET,
        message: {
          type: messageTypes.INFO,
          text: `Post entry succeeded: ${data.title}`
        }
      });
    } else {
      yield put({
        type: actionTypes.MESSAGE_SET,
        message: {
          type: messageTypes.ERROR,
          text: `Post entry failed: ${res.error}`
        }
      });
    }
  } catch (error) {
  } finally {
    yield put({type: actionTypes.FETCH_END});
  }
}

function* putEntry(data) {
  yield put({type: actionTypes.FETCH_START});
  try {
    const res = yield call(httpPut, api.entry, data.payload);
    if (!res.error) {
      yield put({
        type: actionTypes.MESSAGE_SET,
        message: {
          type: messageTypes.INFO,
          text: `Put entry succeeded: ${data.title}`
        }
      });
    } else {
      yield put({
        type: actionTypes.MESSAGE_SET,
        message: {
          type: messageTypes.ERROR,
          text: `Put entry failed: ${res.error}`
        }
      });
    }
  } catch (error) {
  } finally {
    yield put({type: actionTypes.FETCH_END});
  }
}
