import { all } from 'redux-saga/effects';
import auth from './auth';
import entry from './entry';
import query from './query';

export default function* sagas() {
  yield all([
    auth(),
    entry(),
    query()
  ]);
}
