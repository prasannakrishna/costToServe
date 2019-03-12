/**
 * Copyright © 2018, JDA Software Group, Inc. ALL RIGHTS RESERVED.
 * <p>
 * This software is the confidential information of JDA Software, Inc., and is licensed
 * as restricted rights software. The use,reproduction, or disclosure of this software
 * is subject to restrictions set forth in your license agreement with JDA.
 */
/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
  LOGOUT,
  LOAD_ALERTS_COUNT,
  LOAD_ALERTS_COUNT_SUCCESS,
  LOAD_ALERTS_COUNT_ERROR,
  LOAD_METADATA,
  LOAD_METADATA_SUCCESS,
  LOAD_METADATA_ERROR,
  LOAD_BUSINESS_PROCESSES,
  LOAD_BUSINESS_PROCESSES_ERROR,
  LOAD_BUSINESS_PROCESSES_SUCCESS,
  LOAD_BUILD_NUMBER,
  LOAD_BUILD_NUMBER_ERROR,
  LOAD_BUILD_NUMBER_SUCCESS,
  UPDATE_ALERT_COUNT,
  UPDATE_ALERT_COUNT_SUCCESS,
  UPDATE_ALERT_COUNT_ERROR,
  RESET_ALERT_COUNT,
  LOAD_SITUATION_ROOM_UNREAD,
  LOAD_SITUATION_ROOM_UNREAD_SUCCESS,
  LOAD_SITUATION_ROOM_UNREAD_ERROR,
  LOAD_SITUATION_ROOM_CHANNELS,
  LOAD_SITUATION_ROOM_CHANNELS_SUCCESS,
  LOAD_SITUATION_ROOM_CHANNELS_ERROR,
  JOIN_SITUATION_ROOM,
  JOIN_SITUATION_ROOM_SUCCESS,
  JOIN_SITUATION_ROOM_ERROR,
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadRepos() {
  return {
    type: LOAD_REPOS,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function reposLoaded(repos, username) {
  return {
    type: LOAD_REPOS_SUCCESS,
    repos,
    username,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function repoLoadingError(error) {
  return {
    type: LOAD_REPOS_ERROR,
    error,
  };
}

/**
 * Dispatched when logging out
 *
 * @return {object} An action object with a type of LOGOUT
 */
export function logout() {
  return {
    type: LOGOUT,
  };
}

export function getAlertCountStatus(lastUpdatedTimeStamp, durationObj, filterId, preferences) {
  return {
    type: UPDATE_ALERT_COUNT,
    lastUpdatedTimeStamp,
    durationObj,
    filterId,
    preferences,
  };
}

export function resetAlertsCount() {
  return {
    type: RESET_ALERT_COUNT,
  };
}

export function getAlertCountStatusLoaded(notification) {
  return {
    type: UPDATE_ALERT_COUNT_SUCCESS,
    notification,
  };
}

export function getAlertCountStatusError() {
  return {
    type: UPDATE_ALERT_COUNT_ERROR,
  };
}

/**
 * Dispatched to get alerts
 *
 * @return {object} An action object with a type of ALERTS
 */
export function getAlertsCount(durationObj, filterId, preferences) {
  return {
    type: LOAD_ALERTS_COUNT,
    durationObj,
    filterId,
    preferences,
  };
}


/**
 * Dispatched to get alerts
 *
 * @return {object} An action object with a type of ALERTS
 */
export function alertsCountLoaded(alertsCount) {
  return {
    type: LOAD_ALERTS_COUNT_SUCCESS,
    alertsCount,
  };
}


/**
 * Dispatched to get alerts
 *
 * @return {object} An action object with a type of ALERTS
 */
export function alertsCountError(error) {
  return {
    type: LOAD_ALERTS_COUNT_ERROR,
    error,
  };
}

/**
 * Dispatched to get full-text search fields from processModel
 * Dispatched to get metaData from processModel
 *
 * @return {object} An action object with a type of LOAD_METADATA
 */
export function getMetaData() {
  return {
    type: LOAD_METADATA,
  };
}


/**
 * Dispatched to get metaData from processModel
 *
 * @return {object} An action object with a type of LOAD_METADATA_SUCCESS
 */
export function metaDataLoaded(metaData) {
  return {
    type: LOAD_METADATA_SUCCESS,
    metaData,
  };
}


/**
 * Dispatched to get metaData from processModel
 *
 * @return {object} An action object with a type of LOAD_METADATA_ERROR
 */
export function metaDataLoadingError(error) {
  return {
    type: LOAD_METADATA_ERROR,
    error,
  };
}

/**
 * Dispatched to get full-text search fields from processModel
 * Dispatched to get metaData from processModel
 *
 * @return {object} An action object with a type of LOAD_METADATA
 */
export function getBusinessProcesses() {
  return {
    type: LOAD_BUSINESS_PROCESSES,
  };
}


/**
 * Dispatched to get metaData from processModel
 *
 * @return {object} An action object with a type of LOAD_METADATA_SUCCESS
 */
export function businessProcessesLoaded(businessProcesses) {
  return {
    type: LOAD_BUSINESS_PROCESSES_SUCCESS,
    businessProcesses,
  };
}


/**
 * Dispatched to get metaData from processModel
 *
 * @return {object} An action object with a type of LOAD_METADATA_ERROR
 */
export function businessProcessesLoadingError(error) {
  return {
    type: LOAD_BUSINESS_PROCESSES_ERROR,
    error,
  };
}

/**
 * Dispatched to get build number
 *
 * @return {object} An action object with a type of LOAD_BUILD_NUMBER
 */
export function getBuildNumber() {
  return {
    type: LOAD_BUILD_NUMBER,
  };
}


/**
 *
 * @return {object} An action object with a type of LOAD_BUILD_NUMBER_SUCCESS
 */
export function buildNumberLoaded(buildNumber) {
  return {
    type: LOAD_BUILD_NUMBER_SUCCESS,
    buildNumber,
  };
}


/**
 *
 * @return {object} An action object with a type of LOAD_BUILD_NUMBER_ERROR
 */
export function buildNumberLoadingError(error) {
  return {
    type: LOAD_BUILD_NUMBER_ERROR,
    error,
  };
}

/**
 * Dispatched to get situation room unread messages
 *
 */
export function getSitRoomUnread() {
  return {
    type: LOAD_SITUATION_ROOM_UNREAD,
  };
}


/**
 *
 */
export function sitRoomUnreadLoaded(count) {
  return {
    type: LOAD_SITUATION_ROOM_UNREAD_SUCCESS,
    count,
  };
}


/**
 *
 */
export function sitRoomUnreadError(error) {
  return {
    type: LOAD_SITUATION_ROOM_UNREAD_ERROR,
    error,
  };
}

/**
 * Dispatched to get situation room channels
 *
 */
export function getSituationRoom() {
  return {
    type: LOAD_SITUATION_ROOM_CHANNELS,
  };
}


/**
 *
 * @return {object} An action object with a type of LOAD_SITUATION_ROOM_CHANNELS_SUCCESS
 */
export function getSituationRoomLoaded(data) {
  return {
    type: LOAD_SITUATION_ROOM_CHANNELS_SUCCESS,
    data,
  };
}


/**
 *
 * @return {object} An action object with a type of LOAD_SITUATION_ROOM_CHANNELS_ERROR
 */
export function getSituationRoomError(error) {
  return {
    type: LOAD_SITUATION_ROOM_CHANNELS_ERROR,
    error,
  };
}

/**
 * Dispatched to get situation room unread messages
 *
 * @return {object} An action object with a type of JOIN_SITUATION_ROOM
 */
export function joinSituationRoom(channelId) {
  return {
    type: JOIN_SITUATION_ROOM,
    channelId,
  };
}


/**
 *
 * @return {object} An action object with a type of JOIN_SITUATION_ROOM_SUCCESS
 */
export function joinSituationRoomLoaded(status) {
  return {
    type: JOIN_SITUATION_ROOM_SUCCESS,
    status,
  };
}


/**
 *
 * @return {object} An action object with a type of JOIN_SITUATION_ROOM_ERROR
 */
export function joinSituationRoomError(error) {
  return {
    type: JOIN_SITUATION_ROOM_ERROR,
    error,
  };
}
