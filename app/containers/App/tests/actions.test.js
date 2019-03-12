/**
 * Copyright © 2018, JDA Software Group, Inc. ALL RIGHTS RESERVED.
 * <p>
 * This software is the confidential information of JDA Software, Inc., and is licensed
 * as restricted rights software. The use,reproduction, or disclosure of this software
 * is subject to restrictions set forth in your license agreement with JDA.
 */
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

describe('App Actions', () => {
  describe('loadRepos Action', () => {
    it('has a type of LOAD_REPOS', () => {
      expect(loadRepos()).toMatchSnapshot();
    });
  });
  describe('reposLoaded Action', () => {
    it('has a type of LOAD_REPOS_SUCCESS', () => {
      expect(reposLoaded()).toMatchSnapshot();
    });
  });
  describe('repoLoadingError Action', () => {
    it('has a type of LOAD_REPOS_ERROR', () => {
      expect(repoLoadingError()).toMatchSnapshot();
    });
  });
  describe('logout Action', () => {
    it('has a type of LOGOUT', () => {
      expect(logout()).toMatchSnapshot();
    });
  });
  describe('getAlertsCount Action', () => {
    it('has a type of LOAD_ALERTS_COUNT', () => {
      expect(getAlertsCount()).toMatchSnapshot();
    });
  });
  describe('alertsCountLoaded Action', () => {
    it('has a type of LOAD_ALERTS_COUNT_SUCCESS', () => {
      expect(alertsCountLoaded()).toMatchSnapshot();
    });
  });
  describe('alertsCountError Action', () => {
    it('has a type of LOAD_ALERTS_COUNT_ERROR', () => {
      expect(alertsCountError()).toMatchSnapshot();
    });
  });
  describe('getMetaData Action', () => {
    it('has a type of LOAD_METADATA', () => {
      expect(getMetaData()).toMatchSnapshot();
    });
  });
  describe('metaDataLoaded Action', () => {
    it('has a type of LOAD_METADATA_SUCCESS', () => {
      expect(metaDataLoaded()).toMatchSnapshot();
    });
  });
  describe('metaDataLoadingError Action', () => {
    it('has a type of LOAD_METADATA_ERROR', () => {
      expect(metaDataLoadingError()).toMatchSnapshot();
    });
  });
  describe('getBusinessProcesses Action', () => {
    it('has a type of LOAD_BUSINESS_PROCESSES', () => {
      expect(getBusinessProcesses()).toMatchSnapshot();
    });
  });
  describe('businessProcessesLoaded Action', () => {
    it('has a type of LOAD_BUSINESS_PROCESSES_SUCCESS', () => {
      expect(businessProcessesLoaded()).toMatchSnapshot();
    });
  });
  describe('businessProcessesLoadingError Action', () => {
    it('has a type of LOAD_BUSINESS_PROCESSES_ERROR', () => {
      expect(businessProcessesLoadingError()).toMatchSnapshot();
    });
  });
});
