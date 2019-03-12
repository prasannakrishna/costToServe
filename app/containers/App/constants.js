/**
 * Copyright © 2018, JDA Software Group, Inc. ALL RIGHTS RESERVED.
 * <p>
 * This software is the confidential information of JDA Software, Inc., and is licensed
 * as restricted rights software. The use,reproduction, or disclosure of this software
 * is subject to restrictions set forth in your license agreement with JDA.
 */
/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_REPOS = 'boilerplate/App/LOAD_REPOS';
export const LOAD_REPOS_SUCCESS = 'boilerplate/App/LOAD_REPOS_SUCCESS';
export const LOAD_REPOS_ERROR = 'boilerplate/App/LOAD_REPOS_ERROR';
export const LOGOUT = 'boilerplate/App/LOGOUT';
export const DEFAULT_LOCALE = 'en';
export const LOAD_ALERTS_COUNT = 'boilerplate/App/LOAD_ALERTS_COUNT';
export const LOAD_ALERTS_COUNT_SUCCESS = 'boilerplate/App/LOAD_ALERTS_COUNT_SUCCESS';
export const LOAD_ALERTS_COUNT_ERROR = 'boilerplate/App/LOAD_ALERTS_COUNT_ERROR';

export const LOAD_SEARCHFIELDS_PER_CONFIG = 'boilerplate/App/LOAD_SEARCHFIELDS_PER_CONFIG';
export const LOAD_SEARCHFIELDS_PER_CONFIG_SUCCESS = 'boilerplate/App/LOAD_SEARCHFIELDS_PER_CONFIG_SUCCESS';
export const LOAD_SEARCHFIELDS_PER_CONFIG_ERROR = 'boilerplate/App/LOAD_SEARCHFIELDS_PER_CONFIG_ERROR';

export const LOAD_METADATA = 'boilerplate/App/LOAD_METADATA';
export const LOAD_METADATA_SUCCESS = 'boilerplate/App/LOAD_METADATA_SUCCESS';
export const LOAD_METADATA_ERROR = 'boilerplate/App/LOAD_METADATA_ERROR';

export const LOAD_BUSINESS_PROCESSES = 'boilerplate/App/LOAD_BUSINESS_PROCESSES';
export const LOAD_BUSINESS_PROCESSES_SUCCESS = 'boilerplate/App/LOAD_BUSINESS_PROCESSES_SUCCESS';
export const LOAD_BUSINESS_PROCESSES_ERROR = 'boilerplate/App/LOAD_BUSINESS_PROCESSES_ERROR';

export const LOAD_BUILD_NUMBER = 'boilerplate/App/LOAD_BUILD_NUMBER';
export const LOAD_BUILD_NUMBER_SUCCESS = 'boilerplate/App/LOAD_BUILD_NUMBER_SUCCESS';
export const LOAD_BUILD_NUMBER_ERROR = 'boilerplate/App/LOAD_BUILD_NUMBER_ERROR';

export const UPDATE_ALERT_COUNT = 'boilerplate/App/UPDATE_ALERT_COUNT';
export const UPDATE_ALERT_COUNT_SUCCESS = 'boilerplate/App/UPDATE_ALERT_COUNT_SUCCESS';
export const UPDATE_ALERT_COUNT_ERROR = 'boilerplate/App/UPDATE_ALERT_COUNT_ERROR';

export const RESET_ALERT_COUNT = 'boilerplate/App//RESET_ALERT_COUNT';

export const LOAD_SITUATION_ROOM_UNREAD = 'boilerplate/App/LOAD_SITUATION_ROOM_UNREAD';
export const LOAD_SITUATION_ROOM_UNREAD_SUCCESS = 'boilerplate/App/LOAD_SITUATION_ROOM_UNREAD_SUCCESS';
export const LOAD_SITUATION_ROOM_UNREAD_ERROR = 'boilerplate/App/LOAD_SITUATION_ROOM_UNREAD_ERROR';

export const LOAD_SITUATION_ROOM_CHANNELS = 'boilerplate/App/LOAD_SITUATION_ROOM_CHANNELS';
export const LOAD_SITUATION_ROOM_CHANNELS_SUCCESS = 'boilerplate/App/LOAD_SITUATION_ROOM_CHANNELS_SUCCESS';
export const LOAD_SITUATION_ROOM_CHANNELS_ERROR = 'boilerplate/App/LOAD_SITUATION_ROOM_CHANNELS_ERROR';

export const JOIN_SITUATION_ROOM = 'boilerplate/App/JOIN_SITUATION_ROOM';
export const JOIN_SITUATION_ROOM_SUCCESS = 'boilerplate/App/JOIN_SITUATION_ROOM_SUCCESS';
export const JOIN_SITUATION_ROOM_ERROR = 'boilerplate/App/JOIN_SITUATION_ROOM_ERROR';
