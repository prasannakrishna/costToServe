/**
 * Copyright © 2018, JDA Software Group, Inc. ALL RIGHTS RESERVED.
 * <p>
 * This software is the confidential information of JDA Software, Inc., and is licensed
 * as restricted rights software. The use,reproduction, or disclosure of this software
 * is subject to restrictions set forth in your license agreement with JDA.
 */
import { fromJS } from 'immutable';
import appReducer from '../reducer';
import {
  loadRepos,
  reposLoaded,
  repoLoadingError,
  logout,
  getAlertsCount,
  alertsCountLoaded,
  alertsCountError,
  getMetaData,
  metaDataLoaded,
  metaDataLoadingError,
  getBusinessProcesses,
  businessProcessesLoaded,
  businessProcessesLoadingError,
} from '../actions';

const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
  metaData: false,
  businessProcesses: false,
  buildNumber: false,
});

describe('appReducer', () => {
  it('returns the initial state', () => {
    expect(appReducer(undefined, {})).toEqual(initialState);
  });
  it('should handles loadRepos', () => {
    expect(appReducer(initialState, loadRepos([{}]))).toMatchSnapshot();
  });
  it('should handles logout', () => {
    expect(appReducer(initialState, logout([{}]))).toMatchSnapshot();
  });
  it('should handles reposLoaded', () => {
    expect(appReducer(initialState, reposLoaded([{}]))).toMatchSnapshot();
  });
  it('should handles getAlertsCount', () => {
    expect(appReducer(initialState, getAlertsCount([{}]))).toMatchSnapshot();
  });
  it('should handles alertsCountLoaded', () => {
    expect(appReducer(initialState, alertsCountLoaded([{}]))).toMatchSnapshot();
  });
  it('should handles getMetaData', () => {
    expect(appReducer(initialState, getMetaData([{}]))).toMatchSnapshot();
  });
  it('should handles alertsCountError', () => {
    expect(appReducer(initialState, alertsCountError([{}]))).toMatchSnapshot();
  });
  it('should handles metaDataLoaded', () => {
    expect(appReducer(initialState, metaDataLoaded([{}]))).toMatchSnapshot();
  });
  it('should handles metaDataLoadingError', () => {
    expect(appReducer(initialState, metaDataLoadingError([{}]))).toMatchSnapshot();
  });
  it('should handles getBusinessProcesses', () => {
    expect(appReducer(initialState, getBusinessProcesses([{}]))).toMatchSnapshot();
  });
  it('should handles businessProcessesLoaded', () => {
    expect(appReducer(initialState, businessProcessesLoaded([{}]))).toMatchSnapshot();
  });
  it('should handles businessProcessesLoadingError', () => {
    expect(appReducer(initialState, businessProcessesLoadingError([{}]))).toMatchSnapshot();
  });
  it('should handles repoLoadingError', () => {
    expect(appReducer(initialState, repoLoadingError([{}]))).toMatchSnapshot();
  });
});
