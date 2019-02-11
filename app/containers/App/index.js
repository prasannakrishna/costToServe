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
import NavBar from 'components/NavBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { DarkTheme, GlobalStyle } from 'luminate-platform-ui';

import SamplePage from 'containers/SamplePage/Loadable';
import Sample2Page from 'containers/Sample2Page/Loadable';

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
              title: 'LINK1',
            },
            {
              visible: true,
              link: '/link2',
              title: 'LINK2',
            },
          ]}
        />

        <Switch>
          <Route exact path="/" component={SamplePage} />
          <Route path="/link1" component={SamplePage} />
          <Route path="/link2" component={Sample2Page} />
        </Switch>
        <GlobalStyle />
      </AppWrapper>
    </MuiThemeProvider>
  );
}
