/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import NavBar from 'components/NavBar';
import { DarkTheme, GlobalStyle, JDAThemeProvider } from '@jda/luminate-platform-ui';

import SamplePage from 'containers/SamplePage/Loadable';
import Sample2Page from 'containers/Sample2Page/Loadable';
import Forms from 'containers/Forms/Loadable';
import saga from 'containers/App/logout-saga';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';
import { makeSelectApp } from './selectors';
import reducer from './reducer';
import { logout } from './actions';

// import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div``;
/* eslint-disable react/prefer-stateless-function */
export class App extends React.Component {
  render() {
    return (
      <JDAThemeProvider >
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
              {
                visible: true,
                link: '/forms',
                title: 'FORM ELEMENTS',
              },
            ]}
          />

          <Switch>
            <Route exact path="/" component={SamplePage} />
            <Route path="/link1" component={SamplePage} />
            <Route path="/link2" component={Sample2Page} />
            <Route path="/forms" component={Forms} />
          </Switch>
          <GlobalStyle />
        </AppWrapper>
      </JDAThemeProvider>
    );
  }
}

App.propTypes = {};
const mapStateToProps = createStructuredSelector({
  appState: makeSelectApp(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onLogout: () => dispatch(logout()),
  };
}
const withReducer = injectReducer({ key: 'app', reducer });
const withSaga = injectSaga({ key: 'app', saga });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(App);
