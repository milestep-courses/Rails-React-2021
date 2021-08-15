import { all, put, call, takeEvery } from 'redux-saga/effects';
import { getCurrentUser } from '../../services/auth';
import { getUserSuccess, getUserFail } from '../actionCreators/user';
import userTypes from '../actionTypes/user';

function* getUserAuth() {
  try {
    const { data } = yield call(getCurrentUser);
    yield put(getUserSuccess(data));
  } catch (error) {
    yield put(getUserFail());
  }
}

function* watchGetUserAuth() {
  yield takeEvery(userTypes.USER_AUTH_FETCH, getUserAuth);
}

export default function* userSaga() {
  yield all([watchGetUserAuth()]);
}
