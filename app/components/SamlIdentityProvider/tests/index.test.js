/**
 * Copyright © 2018, JDA Software Group, Inc. ALL RIGHTS RESERVED.
 * <p>
 * This software is the confidential information of JDA Software, Inc., and is licensed
 * as restricted rights software. The use,reproduction, or disclosure of this software
 * is subject to restrictions set forth in your license agreement with JDA.
 */
import React from 'react';
import { shallow } from 'enzyme';
import SamlIdentityProvider from '../index';

describe('<SamlIdentityProvider />', () => {
  it('should be rendered correctly.', () => {
    const componentWrapper = shallow(
      <SamlIdentityProvider />
    );
    expect(componentWrapper).toMatchSnapshot();
  });
});
