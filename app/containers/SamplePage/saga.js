import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_CONFIG } from './constants';

import { configLoaded, configLoadingError } from './actions';

// Individual exports for testing
export default function* samplePageSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(LOAD_CONFIG, getConfiguration);
}
export function* getConfiguration() {
  const requestURL = '/api/v1/sampleservice/laptops';
  try {
    const config = yield call(request, requestURL);
    yield put(configLoaded(config));
  } catch (err) {
    yield put(configLoadingError(err));
  }
}
