/**
 * Copyright © 2018, JDA Software Group, Inc. ALL RIGHTS RESERVED.
 * <p>
 * This software is the confidential information of JDA Software, Inc., and is licensed
 * as restricted rights software. The use,reproduction, or disclosure of this software
 * is subject to restrictions set forth in your license agreement with JDA.
 */
/* eslint-disable linebreak-style */
import React from 'react';
import { shallow } from 'enzyme';

import UserName from '../index';

describe('<UserName />', () => {
  let handleMenu;
  let classes;
  let profile;
  let wrapper;
  beforeEach(() => {
    handleMenu = jest.fn();
    classes = {

    };
    profile = {
      data: {
        userName: 'User@User.user',
      },
    };
    wrapper = shallow(
      <UserName
        handleMenu={handleMenu}
        classes={classes}
        profile={profile}
      />
        ).dive();
  });
  describe('Expect to render component correctly', () => {
    it('should render correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});

