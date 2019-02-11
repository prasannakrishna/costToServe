import React from 'react';
import { storiesOf } from '@storybook/react';
import NavBar from '../index';


storiesOf('UI|Components/NavBar', module)
  .add('default', () => (
    <NavBar
      menuItems={[
        {
          visible: true,
          link: '/link1',
          title: 'Link1',
        },
        {
          visible: true,
          link: '/link2',
          title: 'Link2',
        },
        {
          visible: true,
          link: '/link3',
          title: 'Link3',
        }
      ]}
    />
  ));
