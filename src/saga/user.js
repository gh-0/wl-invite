import { put, call, takeEvery } from 'redux-saga/effects';
import request from '../utils/request';
import actions from '../actions/user';

function* queryUserInfo() {
  const data = yield call(request, '/user/personal', { method: 'POST' });
  if (data.info === 'OK') {
    yield put(actions.userInfo(data.personal));
  } else {
    alert('(⊙o⊙)？');
  }
}

function* queryInviteList() {
  const data = yield call(request, '/user/invite/list', { method: 'POST', body: { type: 1 } });
  if (data.info === 'OK') {
    yield put(actions.inviteList(data.result));
  } else {
    alert('(⊙o⊙)？');
  }
}

function* queryTutor() {
  const data = yield call(request, '/user/invite/list', { method: 'POST', body: { type: 2 } });
  if (data.info === 'OK') {
    yield put(actions.tutor(data.result && data.result.length ? data.result[0] : {}));
  } else {
    alert('(⊙o⊙)？');
  }
}

function* fakeInvite({ payload }) {
  const data = yield call(request, '/user/invitecode/bind', { method: 'POST', body: payload });
  if (data.info === 'OK') {
    yield put(actions.queryTutor());
  } else {
    alert('(⊙o⊙)？');
  }
}

export function* watchQueryUserInfo() {
  yield takeEvery(actions.queryUserInfo, queryUserInfo);
  yield takeEvery(actions.queryInviteList, queryInviteList);
  yield takeEvery(actions.queryTutor, queryTutor);
  yield takeEvery(actions.fakeInvite, fakeInvite);
}
