import { fromJS } from 'immutable';
import sample2PageReducer from '../reducer';

describe('sample2PageReducer', () => {
  it('returns the initial state', () => {
    expect(sample2PageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
