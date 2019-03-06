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
import { NavPanel } from '@jda/luminate-platform-ui';

import { compose } from 'redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
import HelpOutline from '@material-ui/icons/HelpOutline';
// import Badge from '@material-ui/core/Badge';
import Grid from '@material-ui/core/Grid';
import Background from './lcticon.svg';
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

export class NavBar extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  state = {
    left: false,
  };

  handleToggle = (side, open) => () => {
    this.setState({ [side]: open });
  };

  render() {
    const { classes, menuItems, location } = this.props;
    return (
      <div>
        <AppBar position="static">
          <Toolbar style={{ padding: 0 }}>
            <Grid container style={{ height: 38 }}>
              <Grid item xs={6} md={6} className={classes.breadcrumb}>
                <IconButton
                  style={{ height: 38, width: 38 }}
                  color="inherit"
                  aria-label="Menu"
                  onClick={this.handleToggle('left', !this.state.left)}
                >
                  <MenuIcon />
                </IconButton>
                <Link to="/">
                  <img
                    src={Background}
                    className="icon"
                    alt="Watch Tower Icon"
                  />
                </Link>
                <Breadcrumbs pathname={location.pathname} />
              </Grid>
              <Grid item xs={6} md={6} className={classes.icons}>
                <IconButton
                  className={classes.icon}
                  onClick={() => window.open('/api/v1/help/', '_blank')}
                >
                  <HelpOutline />
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Drawer
          open={this.state.left}
          anchor="left"
          onClose={this.handleToggle('left', false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.handleToggle('left', false)}
            onKeyDown={this.handleToggle('left', false)}
            className={classes.flex}
          >
            <NavPanel menuItems={menuItems} />
          </div>
        </Drawer>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  // logout: PropTypes.func,
  menuItems: PropTypes.array.isRequired,
  location: PropTypes.object,
  // version: PropTypes.string,
};

export default compose(
  withStyles(styles),
  withRouter,
)(NavBar);
