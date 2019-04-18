import { all } from 'redux-saga/effects';
import { watchQueryUserInfo } from './user';

export default function* rootSaga() {
  yield all([watchQueryUserInfo()]);
}
