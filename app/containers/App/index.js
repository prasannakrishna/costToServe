/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { LightTheme, DarkTheme, NavBar, NavPanel, GlobalStyle } from 'luminate-platform-ui';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

// import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div``;

export default function App() {
  return (
    <MuiThemeProvider theme={DarkTheme}>
      <AppWrapper
        style={{
          backgroundColor: DarkTheme.palette.primary[200],
          height: '100%',
          minHeight: '100vh',
        }}
      >
        <Helmet
          titleTemplate="%s - Luminate Control Tower"
          defaultTitle="Luminate Control Tower"
        >
          <meta
            name="description"
            content="A React.js Boilerplate application"
          />
        </Helmet>
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
          ]}
        />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/link1" component={FeaturePage} />
          <Route path="/link2" component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </AppWrapper>
    </MuiThemeProvider>
  );
}
