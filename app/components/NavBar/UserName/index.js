/**
 * Copyright © 2018, JDA Software Group, Inc. ALL RIGHTS RESERVED.
 * <p>
 * This software is the confidential information of JDA Software, Inc., and is licensed
 * as restricted rights software. The use,reproduction, or disclosure of this software
 * is subject to restrictions set forth in your license agreement with JDA.
 */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import styled from '@emotion/styled';

const UserNameContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  padding: 2,
  '&::before': {
    content: '\'\'',
    display: 'block',
    marginTop: '8px',
    marginBottom: '8px',
    marginLeft: '8px',
    width: 12,
    paddingTop: 5,
    borderLeft: '1px solid rgba(255,255,255,0.5)',
  },
  '&::after': {
    cursor: 'pointer',
    fontFamily: 'Material Icons',
    content: 'expand_more',
    marginLeft: '-10%',
    marginTop: '5%',
    fontSize: '20px',
    color: 'rgba(255,255,255,0)',
  },
  '&:hover::after': {
    cursor: 'pointer',
    fontFamily: 'Material Icons',
    content: 'expand_more',
    marginLeft: '-10%',
    marginTop: '5%',
    fontSize: '20px',
    color: 'rgba(255,255,255,0.5)',
  },
});

const styles = () => ({
  icon: {
    width: 20,
    flexGrow: 1,
    margin: 7,
    color: 'white',
    height: 24,
  },
  userIcon: {
    width: 24,
    height: 24,
    backgroundColor: '#ffff',
    color: 'black',
    fontSize: 12,
  },
});
const getAvatarString = (nameStr) => {
    // check for @
  if (nameStr.indexOf('@') > -1 || nameStr.indexOf(' ') < 0) {
    return nameStr.split('@')[0].substring(0, 2).toUpperCase();
  }
  const y = nameStr.split(' ').map((e) => e.charAt(0));
  return `${y[0].toUpperCase()}${y[y.length - 1].toUpperCase()}`;
};
const UserName = (props) => {
  const { classes, userName } = props;
  if (!userName) return null;
  return (<UserNameContainer onClick={props.handleMenu}>
    <IconButton
      className={classes.icon}
    >
      <Avatar
        className={classes.userIcon}
      > {getAvatarString(userName)}
      </Avatar>
    </IconButton>
  </UserNameContainer>);
};

UserName.propTypes = {
  classes: PropTypes.object.isRequired,
  handleMenu: PropTypes.func,
  userName: PropTypes.string,
};

export default withStyles(styles)(UserName);
