/**
 * Copyright © 2018, JDA Software Group, Inc. ALL RIGHTS RESERVED.
 * <p>
 * This software is the confidential information of JDA Software, Inc., and is licensed
 * as restricted rights software. The use,reproduction, or disclosure of this software
 * is subject to restrictions set forth in your license agreement with JDA.
 */
import React from 'react';
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { LightTheme, DarkTheme } from 'luminate-platform-ui';
// import UserPreferencesProvider from 'containers/UserPreferencesProvider';
// import LoginPage from 'containers/LoginPage';
import styled from 'styled-components';
import eStyled from '@emotion/styled';

// import eStyled from '@emotion/styled';
// import LctLogo from '!file-loader?name=[name].[ext]!images/lctlogo.svg';
// import ErrorNotificationBar from 'components/ErrorNotificationBar';
// import client from './utils/eventEmit';
// import BrowserIncompatibleCard from './components/BrowserIncompatibleCard';

import App from 'containers/App';

let isChrome = navigator.userAgent.indexOf('Chrome') > -1;
const isFirefox = navigator.userAgent.indexOf('Firefox') > -1;
let isSafari = navigator.userAgent.indexOf('Safari') > -1;
const opera = navigator.userAgent.toLowerCase().indexOf('op') > -1;
const isEdge = navigator.userAgent.indexOf('Edge') > -1;

const AppWrapper = styled.div``;

if (isChrome && isSafari) isSafari = false;
if (isChrome && opera) isChrome = false;

const ImageWrapper = eStyled.img({
  height: '75px',
  margin: '30px auto',
});

class AppContainer extends React.Component {
  constructor() {
    super();
    this.updateAppContainer = this.updateAppContainer.bind(this);
  }

  // componentWillMount() {
  //   this.unlisten = this.props.history.listen(() => {
  //     client.emit('routeChange');
  //   });
  // }
  // componentDidMount() {
  //   client.on('notificationThemeUpdate', () => {
  //     this.updateAppContainer();
  //   });
  // }
  // componentWillUnmount() {
  //   this.unlisten();
  // }

  updateAppContainer() {
    this.setState({});
  }

  render() {
    // const theme = localStorage.getItem('theme') === 'dark' ? lightTheme : darkTheme;
    const theme = DarkTheme;

    const styles = {
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column',
    };

    // if (isChrome || isFirefox || isSafari || isEdge) {
    return (
      <div>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </div>
    );
    // }

    // return (
    //   <AppWrapper style={{ backgroundColor: theme.palette.primary[200], height: '100vh' }}>
    //     <div style={styles}>
    //       <ImageWrapper alt="lctlogo" src={LctLogo} />
    //       <BrowserIncompatibleCard />
    //     </div>
    //   </AppWrapper>
    // );
  }
}

AppContainer.propTypes = {};

export default withRouter(AppContainer);
