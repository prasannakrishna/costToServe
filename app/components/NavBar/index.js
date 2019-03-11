/**
 * Copyright © 2019, JDA Software Group, Inc. ALL RIGHTS RESERVED.
 * <p>
 * This software is the confidential information of JDA Software, Inc., and is licensed
 * as restricted rights software. The use,reproduction, or disclosure of this software
 * is subject to restrictions set forth in your license agreement with JDA.
 */
/**
 *
 * NavBar
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { NavPanel, NavBar } from '@jda/luminate-platform-ui';

import { compose } from 'redux';
import { withRouter } from 'react-router';
import { withStyles } from '@material-ui/core/styles';
import Notifications from '@material-ui/icons/Notifications';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
import HelpOutline from '@material-ui/icons/HelpOutline';
// import Badge from '@material-ui/core/Badge';
// import Grid from '@material-ui/core/Grid';
// import Background from './lcticon.svg';
// import UserName from './UserName';
import { Breadcrumbs } from './helper';

const styles = () => ({
  icon: {
    margin: 7,
    color: 'white',
    height: 24,
    width: 24,
  },
  breadcrumb: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  icons: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  badge: {
    top: 5,
    left: 0,
    right: 'auto',
    padding: '0 2px',
    height: 18,
    width: 'auto',
    minWidth: 18,
    borderRadius: 8,
    background: '#b71c1c',
    fontSize: '0.7em',
  },
});

const iconItems = [
  {
    title: 'Help Icon',
    onClick: () => window.open('/api/v1/help/', '_blank'),
    iconElement: <HelpOutline />,
  },
  {
    title: 'Notification Icon',
    onClick: null,
    iconElement: <Notifications />,
  },
];

const BreadCrumbComponent = props => {
  const { location } = props;
  return <Breadcrumbs pathname={location.pathname} />;
};

export class NavBarComponent extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  state = {};

  render() {
    const { classes, menuItems, location } = this.props;
    const npanel = <NavPanel menuItems={menuItems} />;
    const bcrumbs = <BreadCrumbComponent location={location} />;
    return (
      <NavBar
        classes={classes}
        navpanel={npanel}
        breadcrumbcomponent={bcrumbs}
        iconitems={iconItems}
      />
    );
  }
}

BreadCrumbComponent.propTypes = {
  location: PropTypes.object,
};

NavBarComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  menuItems: PropTypes.array.isRequired,
  location: PropTypes.object,
};

export default compose(
  withStyles(styles),
  withRouter,
)(NavBarComponent);
