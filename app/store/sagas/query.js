import { call, put, takeLatest } from 'redux-saga/effects';

import { actionTypes } from 'APP/store/actions';
import { get } from 'APP/lib/fetch';
import { api } from 'APP/config';

export default function* authSagas() {
  yield takeLatest(actionTypes.QUERY_START, query);
}

function* query(data) {
  yield put({type: actionTypes.FETCH_START});
  try {
    const res = yield call(get, buildQuery(data.payload));
    if (!res.error) {
      yield call(queryHandle, res.entry);
    } else {
      yield put({
        type: actionTypes.MESSAGE_SET,
        message: {
          type: messageTypes.ERROR,
          text: `Query failed: ${res.error}`
        }
      });
    }
  } catch (error) {
  } finally {
    yield put({type: actionTypes.FETCH_END});
  }
}

function* queryHandle(data) {
  return yield put({
    type: actionTypes.QUERY_DONE,
    payload: data
  });
}

function buildQuery(data) {
  return `${api.query}/${data}`;
}
