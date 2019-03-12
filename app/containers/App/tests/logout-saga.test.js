import { testSaga, expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';
import request from 'utils/request';
import defaultSaga, { getLogout, getMetaData, getBusinessProcesses } from '../logout-saga';
import { LOGOUT, LOAD_METADATA, LOAD_BUSINESS_PROCESSES } from '../constants';
import { metaDataLoaded, businessProcessesLoaded, metaDataLoadingError, businessProcessesLoadingError } from '../actions';

describe('Logout saga', () => {
  const error = new Error('error');

  it('Expect to have unit tests specified', () => {
    expect(false).toEqual(false);
  });
  it('should check in getLogout', () => {
    //  const [object, objectType, filters] = nodeInfoConfig(action.data, action.format);
    const requestURL = '/logout';
    // if (action.durationObj && action.durationObj.fromDuration && action.durationObj.fromDuration !== 'all') {
    //   requestURL = `/api/v1/alerts/unReadCount?query=state=Open;alertStatusLmd${encodeURIComponent('>=')}${action.durationObj.fromDuration};alertStatusLmd${encodeURIComponent('<=')}${action.durationObj.toDuration}&aggregationField=objectType`;
    // }

    testSaga(getLogout)
      .next()
      .call(request, requestURL, { method: 'POST' })
      .next()
      // .put(alertsCountLoaded())
      // .next()
      .isDone();
  });
  it('should call metaDataLoaded', () => {
    //  const [object, objectType, filters] = nodeInfoConfig(action.data, action.format);
    const requestURL = '/api/v1/processModel/metaData';
    // if (action.durationObj && action.durationObj.fromDuration && action.durationObj.fromDuration !== 'all') {
    //   requestURL = `/api/v1/alerts/unReadCount?query=state=Open;alertStatusLmd${encodeURIComponent('>=')}${action.durationObj.fromDuration};alertStatusLmd${encodeURIComponent('<=')}${action.durationObj.toDuration}&aggregationField=objectType`;
    // }

    testSaga(getMetaData)
      .next()
      .call(request, requestURL)
      .next()
      .put(metaDataLoaded())
      .next()
      .isDone();
  });
  it('should call businessProcessesLoaded', () => {
    //  const [object, objectType, filters] = nodeInfoConfig(action.data, action.format);
    const requestURL = '/api/v1/processModel/businessProcesses';
    // if (action.durationObj && action.durationObj.fromDuration && action.durationObj.fromDuration !== 'all') {
    //   requestURL = `/api/v1/alerts/unReadCount?query=state=Open;alertStatusLmd${encodeURIComponent('>=')}${action.durationObj.fromDuration};alertStatusLmd${encodeURIComponent('<=')}${action.durationObj.toDuration}&aggregationField=objectType`;
    // }

    testSaga(getBusinessProcesses)
      .next()
      .call(request, requestURL)
      .next()
      .put(businessProcessesLoaded())
      .next()
      .isDone();
  });
  it('should throw error for getMetaData when error caught', () => {
    expectSaga(getMetaData)
      .provide([
        [matchers.call.fn(request), throwError(error)],
      ])
      .put(metaDataLoadingError(error))
      .run();
  });
  it('should throw error for getBusinessProcesses when error caught', () => {
    expectSaga(getBusinessProcesses)
      .provide([
        [matchers.call.fn(request), throwError(error)],
      ])
      .put(businessProcessesLoadingError(error))
      .run();
  });
  it('should take the latest for defaultSaga', () => {
    testSaga(defaultSaga)
      .next()
      .takeEveryEffect(LOGOUT, getLogout)
      .next()
      .takeLatestEffect(LOAD_METADATA, getMetaData)
      .next()
      .takeLatestEffect(LOAD_BUSINESS_PROCESSES, getBusinessProcesses)
      .finish()
      .isDone();
  });
});
