/*
 *
 * SamplePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_CONFIG_SUCCESS,
  LOAD_CONFIG_ERROR,
  LOAD_CONFIG,
} from './constants';

export const initialState = fromJS({
  configurations: false,
  config_loading: false,
  config_error: false,
});

function samplePageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CONFIG:
      return state.set('config_loading', true).set('config_error', false);
    case LOAD_CONFIG_SUCCESS:
      return state
        .set('configurations', action.configurations)
        .set('config_loading', false);
    case LOAD_CONFIG_ERROR:
      return state
        .set('config_error', action.error)
        .set('config_loading', false);
    default:
      return state;
  }
}

export default samplePageReducer;
