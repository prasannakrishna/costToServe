/**
 * Copyright © 2018, JDA Software Group, Inc. ALL RIGHTS RESERVED.
 * <p>
 * This software is the confidential information of JDA Software, Inc., and is licensed
 * as restricted rights software. The use,reproduction, or disclosure of this software
 * is subject to restrictions set forth in your license agreement with JDA.
 */
/**
 * Test injectors
 */

import { memoryHistory } from 'react-router-dom';
import { shallow } from 'enzyme';
import React from 'react';
import identity from 'lodash/identity';

import configureStore from '../../configureStore';
import injectReducer from '../injectReducer';
import * as reducerInjectors from '../reducerInjectors';

// Fixtures
const Component = () => null;

const reducer = identity;

describe('injectReducer decorator', () => {
  let store;
  let injectors;
  let ComponentWithReducer;

  beforeAll(() => {
    reducerInjectors.default = jest.fn().mockImplementation(() => injectors);
  });

  beforeEach(() => {
    store = configureStore({}, memoryHistory);
    injectors = {
      injectReducer: jest.fn(),
    };
    ComponentWithReducer = injectReducer({ key: 'test', reducer })(Component);
    reducerInjectors.default.mockClear();
  });

  it('should inject a given reducer', () => {
    shallow(<ComponentWithReducer />, { context: { store } });

    expect(injectors.injectReducer).toHaveBeenCalledTimes(1);
    expect(injectors.injectReducer).toHaveBeenCalledWith('test', reducer);
  });

  it('should set a correct display name', () => {
    expect(ComponentWithReducer.displayName).toBe('withReducer(Component)');
    expect(injectReducer({ key: 'test', reducer })(() => null).displayName).toBe('withReducer(Component)');
  });

  it('should propagate props', () => {
    const props = { testProp: 'test' };
    const renderedComponent = shallow(<ComponentWithReducer {...props} />, { context: { store } });

    expect(renderedComponent.prop('testProp')).toBe('test');
  });
});
