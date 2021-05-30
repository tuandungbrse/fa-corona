import { all, call, put, takeLatest } from 'redux-saga/effects';
import * as API from '../../services';

//@ts-ignore
function* loginRequestWorker(action) {
  try {
    const { payload } = action;
    //@ts-ignore
    const response = yield call(API.login, payload);
    yield put({
      type: 'SIGN_IN',
      payload: response
    });
  } catch (error) {
    yield put({
      type: 'SIGN_IN_FAIL'
    });
  } finally {
  }
}

function* loginRequestWatcher() {
  yield takeLatest('SIGN_IN_REQUEST', loginRequestWorker);
}

export default function* rootSaga() {
  yield all([loginRequestWatcher()]);
}
