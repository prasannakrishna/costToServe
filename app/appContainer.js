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

import App from 'containers/App';

// eslint-disable-next-line react/prefer-stateless-function
class AppContainer extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </div>
    );
  }
}

AppContainer.propTypes = {};

export default withRouter(AppContainer);
