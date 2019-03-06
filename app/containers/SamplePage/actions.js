/*
 *
 * SamplePage actions
 *
 */

import {
  LOAD_CONFIG,
  LOAD_CONFIG_ERROR,
  LOAD_CONFIG_SUCCESS,
} from './constants';

export function loadConfig() {
  return {
    type: LOAD_CONFIG,
  };
}

export function configLoaded(configurations) {
  return {
    type: LOAD_CONFIG_SUCCESS,
    configurations,
  };
}

export function configLoadingError(error) {
  return {
    type: LOAD_CONFIG_ERROR,
    error,
  };
}
