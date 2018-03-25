import { all } from 'redux-saga/effects';
import auth from './auth';

export default function* sagas() {
  //yield auth();
  yield all([
    auth()
  ]);
}
