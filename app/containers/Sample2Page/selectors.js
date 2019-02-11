import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the sample2Page state domain
 */

const selectSample2PageDomain = state => state.get('sample2Page', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Sample2Page
 */

const makeSelectSample2Page = () =>
  createSelector(selectSample2PageDomain, substate => substate.toJS());

export default makeSelectSample2Page;
export { selectSample2PageDomain };
