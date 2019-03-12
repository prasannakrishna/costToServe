/**
 * Copyright © 2018, JDA Software Group, Inc. ALL RIGHTS RESERVED.
 * <p>
 * This software is the confidential information of JDA Software, Inc., and is licensed
 * as restricted rights software. The use,reproduction, or disclosure of this software
 * is subject to restrictions set forth in your license agreement with JDA.
 */
/* eslint consistent-return:0 */

// require('appdynamics').profile({
//   controllerHostName: process.env.APPDYNAMICS_CONTROLLER_HOST_NAME,
//   controllerPort: process.env.APPDYNAMICS_CONTROLLER_PORT,
//   // If SSL, be sure to enable the next line
//   controllerSslEnabled: process.env.APPDYNAMICS_CONTROLLER_SSL_ENABLED,
//   accountName: process.env.APPDYNAMICS_AGENT_ACCOUNT_NAME,
//   accountAccessKey: process.env.APPDYNAMICS_AGENT_ACCOUNT_ACCESS_KEY,
//   applicationName: process.env.APPDYNAMICS_AGENT_APPLICATION_NAME,
//   tierName: process.env.APPDYNAMICS_AGENT_TIER_NAME,
//   // The controller will automatically append the node name with a unique number
//   reuseNode: process.env.APPDYNAMICS_REUSE_NODE,
//   reuseNodePrefix: process.env.APPDYNAMICS_REUSE_NODE_PREFIX,
// });

const express = require('express');
const logger = require('./logger');
// const isDev = process.env.NODE_ENV !== 'production';
const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');
// const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;
const resolve = require('path').resolve;
const app = express();
const proxy = require('http-proxy-middleware');
const MmUrl = process.env.MATTERMOST_URL;

const expressConfig = require('./config/express');
const routesConfig = require('./routes');

expressConfig(app);
routesConfig(app);

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// Start your app.
const server = app.listen(port, host, (err) => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  // if (ngrok) {
  //   ngrok.connect(port, (innerErr, url) => {
  //     if (innerErr) {
  //       return logger.error(innerErr);
  //     }

  //     logger.appStarted(port, prettyHost, url);
  //   });
  // } else {
  logger.appStarted(port, prettyHost);
  // }
  return null; // sonar error
});

const wsProxy = proxy('/api/v4/websocket', {
  target: MmUrl || 'http://localhost:3001',
  logLevel: 'debug',
  ws: true,
});


server.on('upgrade', wsProxy.upgrade); // upgrade externally
