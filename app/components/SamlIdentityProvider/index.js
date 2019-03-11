/**
 * Copyright © 2018, JDA Software Group, Inc. ALL RIGHTS RESERVED.
 * <p>
 * This software is the confidential information of JDA Software, Inc., and is licensed
 * as restricted rights software. The use,reproduction, or disclosure of this software
 * is subject to restrictions set forth in your license agreement with JDA.
 */
/**
 *
 * SamlIdentityProvider
 *
 */

import React from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { DarkTheme } from '@jda/luminate-platform-ui';
import styled from 'styled-components';
import buttonImage from './sign-in-button.png';
import jdaLogo from './logo_login_jda.png';

const sectionCenteredStyle = {
  fontFamily: 'Roboto',
  position: 'absolute',
  top: '50%',
  // left:  '50%',
  textAlign: 'center',
  width: '100%',
  padding: '0 20px',
  boxSizing: 'border-box',
};

const copyrightStyle = {
  textAlign: 'center',
  width: '100%',
  padding: '0 20px',
  boxSizing: 'border-box',
  position: 'absolute',
  bottom: '30px',
  //  flexDirection: 'column',
  //  left: '50%'
  // transform: 'translateX(-50%)'
};
const applicationTitleStyle = {
  fontFamily: 'Roboto',
  fontSize: '28px',
  color: '#FAFAFA',
  fontWeight: '300',
};

const loginButtonWrapper = {
  marginTop: '10px',
};

const copyrightMsg = {
  fontFamily: 'Roboto',
  fontSize: '10px',
  color: 'white',
  textAlign: 'center',
  opacity: '0.55',
};

const msgAreaStyle = {
  width: '100%',
  maxWidth: '600px',
  borderRadius: '3px',
  boxSizing: 'border-box',
  padding: '0 20px',
  height: '100%',
};

const AppWrapper = styled.div``;

const AppFrame = styled.div`
  margin-top: 0px;
  overflow-x: hidden;
`;
/* eslint-disable react/prefer-stateless-function */
class SamlIdentityProvider extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={DarkTheme}>
        <AppWrapper
          style={{
            backgroundColor: DarkTheme.palette.primary[200],
            height: '100vh',
          }}
        >
          <AppFrame>
            <div style={msgAreaStyle}>
              <div className="section centered" style={sectionCenteredStyle}>
                <div
                  className="application-title"
                  style={applicationTitleStyle}
                >
                  JDA Luminate YODA Platform
                </div>
                <div
                  className="login-button-wrapper"
                  style={loginButtonWrapper}
                >
                  {/* <Link to='/loginform' > */}
                  <a href="/auth">
                    <img
                      src={buttonImage}
                      width="256"
                      height="47"
                      alt="sign in button"
                    />
                  </a>
                  {/* </Link> */}
                </div>
              </div>

              <div className="section copyright-section" style={copyrightStyle}>
                <div>
                  <img src={jdaLogo} alt="JDA plan to deliver" />
                </div>
                <span className="copyright-msg" style={copyrightMsg}>
                  Copyright © 2019, JDA Software Group, Inc. ALL RIGHTS
                  RESERVED.
                  <br />
                  This software is the confidential information of JDA Software,
                  Inc., and is licensed as restricted rights software.The use,{' '}
                  <br />
                  reproduction, or disclosure of this software is subject to
                  restrictions set forth in your license agreement with JDA.
                </span>
              </div>
            </div>
          </AppFrame>
        </AppWrapper>
      </MuiThemeProvider>
    );
  }
}

SamlIdentityProvider.propTypes = {};

export default SamlIdentityProvider;
