/**
 * Copyright © 2018, JDA Software Group, Inc. ALL RIGHTS RESERVED.
 * <p>
 * This software is the confidential information of JDA Software, Inc., and is licensed
 * as restricted rights software. The use,reproduction, or disclosure of this software
 * is subject to restrictions set forth in your license agreement with JDA.
 */
/* eslint-disable linebreak-style */
import React from 'react';
import renderer from 'react-test-renderer';

import Loadable from '../Loadable';

describe('<Loadable />', () => {
  it('should render correctly', () => {
    const comp = renderer.create(
      <Loadable />
      );
    expect(comp.toJSON()).toMatchSnapshot();
  });
});
