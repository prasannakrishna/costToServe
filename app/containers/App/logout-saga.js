/**
 * Copyright © 2018, JDA Software Group, Inc. ALL RIGHTS RESERVED.
 * <p>
 * This software is the confidential information of JDA Software, Inc., and is licensed
 * as restricted rights software. The use,reproduction, or disclosure of this software
 * is subject to restrictions set forth in your license agreement with JDA.
 */
/* eslint-disable linebreak-style */
import { call, takeEvery } from 'redux-saga/effects';
// Individual exports for testing
import { LOGOUT } from 'containers/App/constants';
// Individual exports for testing
import request from 'utils/request';

export function* getLogout() {
  const requestURL = '/logout';
  yield call(request, requestURL, { method: 'POST' });
  window.location.assign('/login');
}

// Individual exports for testing
export default function* defaultSaga() {
  yield takeEvery(LOGOUT, getLogout);
}
