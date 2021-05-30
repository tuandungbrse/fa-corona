import { all, call, put, takeLatest } from 'redux-saga/effects';
import * as API from '../../services';

function* loginRequestWorker(action) {
  try {
    const { payload } = action;
    //@ts-ignore
    const response = yield call(API.login, payload);
    console.log(response);
    put({
      type: 'SIGN_IN',
      payload: response
    });
  } catch (error) {
    put({
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
