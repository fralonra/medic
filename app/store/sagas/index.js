import { all } from 'redux-saga/effects';
import auth from './auth';
import query from './query';

export default function* sagas() {
  yield all([
    auth(),
    query()
  ]);
}
