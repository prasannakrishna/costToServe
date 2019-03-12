/**
 * Copyright © 2018, JDA Software Group, Inc. ALL RIGHTS RESERVED.
 * <p>
 * This software is the confidential information of JDA Software, Inc., and is licensed
 * as restricted rights software. The use,reproduction, or disclosure of this software
 * is subject to restrictions set forth in your license agreement with JDA.
 */
/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectAppDomain = (state) => state.get('app');

/**
 * Default selector used by App
 */

const makeSelectApp = () => createSelector(
  selectAppDomain,
  (substate) => substate.toJS()
);

/**
 * Other specific selectors
 */
const selectGlobal = (state) => state.get('global');

const selectRoute = (state) => state.get('route');

const selectAlerts = (state) => state.get('alertsCount');

const makeSelectCurrentUser = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('currentUser')
);

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
);

const makeSelectRepos = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['userData', 'repositories'])
);

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

const makeAlertsCount = () => createSelector(
   selectAlerts,
   (substate) => substate && substate.get('alertsCount')
);

const makeAlertsCountLastUpdated = () => createSelector(
  selectAlerts,
  (substate) => substate && substate.get('lastUpdatedTimeStamp')
);

const makeSelectPreferences = () => createSelector(
    selectGlobal,
    (globalState) => globalState.getIn(['userData', 'preferences'])
);

const makeSelectProfile = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['userData', 'profile'])
);

const makeSelectMetaData = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('metaData')
);

const makeSelectBusinessProcesses = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('businessProcesses')
);

const makeSelectGlobalConfig = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('globalConfig')
);

const makeSelectSitRoomUnread = () => createSelector(
  selectAlerts,
  (substate) => substate && substate.get('sitRoomUnreadCount')
);

const makeSelectSitRoomActive = () => createSelector(
  selectAlerts,
  (substate) => substate && substate.get('activeRoomsCount')
);

const makeSelectSitRoomPending = () => createSelector(
  selectAlerts,
  (substate) => substate && substate.get('pendingRooms')
);

export {
  selectAppDomain,
  makeSelectApp,
  selectGlobal,
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectRepos,
  makeSelectLocation,
  makeAlertsCount,
  makeAlertsCountLastUpdated,
  makeSelectBusinessProcesses,
  makeSelectMetaData,
  selectAlerts,
  makeSelectPreferences,
  makeSelectProfile,
  makeSelectGlobalConfig,
  makeSelectSitRoomUnread,
  makeSelectSitRoomActive,
  makeSelectSitRoomPending,
};
