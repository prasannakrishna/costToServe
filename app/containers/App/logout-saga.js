/**
 * Copyright © 2018, JDA Software Group, Inc. ALL RIGHTS RESERVED.
 * <p>
 * This software is the confidential information of JDA Software, Inc., and is licensed
 * as restricted rights software. The use,reproduction, or disclosure of this software
 * is subject to restrictions set forth in your license agreement with JDA.
 */
/* eslint-disable linebreak-style */
import { call, takeEvery, takeLatest, put } from 'redux-saga/effects';
// Individual exports for testing
import { LOGOUT, LOAD_METADATA, LOAD_BUSINESS_PROCESSES, LOAD_BUILD_NUMBER } from 'containers/App/constants';
// Individual exports for testing
import request from 'utils/request';
import {
  metaDataLoaded,
  metaDataLoadingError,
  businessProcessesLoaded,
  businessProcessesLoadingError,
  buildNumberLoaded,
  buildNumberLoadingError,
} from './actions';

export function* getLogout() {
  const requestURL = '/logout';
  yield call(request, requestURL, { method: 'POST' });
  window.location.assign('/login');
}


/* When userProfile api is called for first time on componentdidmount, getAlertsCount api need to be
called by consuming 'defaultAlertDuration' from user preferences.   */
export function* getUserPreferences(action) {
  const requestURL = '/api/v1/ums/userProfiles';
  try {
    const profile = yield call(request, requestURL);
    profile.data = profile.data[0];
    if (typeof profile.data.preferences === 'undefined') {
      profile.data.preferences = {};
    }
    yield put(userPreferencesLoaded(profile));
    client.emit('setProfileProps', profile);
    if (action.callOnceonDidMount) {
      if (profile.data && profile.data.preferences && (profile.data.preferences.defaultAlertDuration || profile.data.preferences.alert.lastViewed)) {
        const durationObj = (profile.data.preferences.alert.lastViewed !== null || profile.data.preferences.alert.lastViewed !== undefined) ? 'lv' : profile.data.preferences.defaultAlertDuration;
        action.getAlertsCountFunc(getDurationObjectForAlerts(durationObj, profile.data.preferences.alert.lastViewed), profile.data.preferences);
      } else {
        action.getAlertsCountFunc(getDurationObjectForAlerts('all'), profile.data.preferences);
      }
    }
  } catch (err) {
    yield put(userPreferencesError(err));
    if (action.callOnceonDidMount) {
      action.getAlertsCountFunc(getDurationObjectForAlerts('all'));
    }
  }
  console.log('Fetched User Preferences');
}

export function* getMetaData() {
  // const requestURL = '/fakeapi/metaData';
  const requestURL = '/api/v1/processModel/metaData';
  try {
    const metadata = yield call(request, requestURL);
    yield put(metaDataLoaded(metadata));
  } catch (err) {
    yield put(metaDataLoadingError(err));
  }
}

export function* getBusinessProcesses() {
  // const requestURL = '/fakeapi/metaData';
  const requestURL = '/api/v1/processModel/businessProcesses';
  try {
    const businessProcesses = yield call(request, requestURL);
    yield put(businessProcessesLoaded(businessProcesses));
  } catch (err) {
    yield put(businessProcessesLoadingError(err));
  }
}

export function* getBuildNumber() {
  const requestURL = '/buildNumber';
  try {
    const buildNumber = yield call(request, requestURL);
    yield put(buildNumberLoaded(buildNumber));
  } catch (err) {
    yield put(buildNumberLoadingError(err));
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  yield takeEvery(LOGOUT, getLogout);
  yield takeLatest(LOAD_METADATA, getMetaData);
  yield takeLatest(LOAD_BUSINESS_PROCESSES, getBusinessProcesses);
  yield takeLatest(LOAD_BUILD_NUMBER, getBuildNumber);
}
