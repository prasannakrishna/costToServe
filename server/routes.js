/**
 * Copyright © 2018, JDA Software Group, Inc. ALL RIGHTS RESERVED.
 * <p>
 * This software is the confidential information of JDA Software, Inc., and is licensed
 * as restricted rights software. The use,reproduction, or disclosure of this software
 * is subject to restrictions set forth in your license agreement with JDA.
 */
const isDev = process.env.NODE_ENV !== 'production';
const passport = require('passport');
const proxy = require('http-proxy-middleware');
const refresh = require('passport-oauth2-refresh');
const jwt = require('jsonwebtoken');

const MockApiUrl = process.env.MOCK_API_URL;
const ApiUrl = process.env.API_URL;

const MmUrl = process.env.MATTERMOST_URL;
const ValidDomains = process.env.ALLOWED_DOMAINS;
let lctreferer = '';
let socketUrl = '';

if (MmUrl && MmUrl.startsWith('https:')) {
  socketUrl = MmUrl.replace(/^https:/, 'wss:');
} else {
  socketUrl = MmUrl && MmUrl.replace(/^http:/, 'ws:');
}

function isAuthenticated(req, res, next) {
  // Bypass authentication for dev mode
  lctreferer = req.headers.referer;
  if (req.user || isDev) {
    return next();
  }
  return res.status(401).json(
    { errors: [
      { message: 'Unauthorized', code: 401 }],
    }
  );
}

function isTokenExpired(req, res, next) {
  if (!isDev) {
    const decodedToken = jwt.decode(req.user.accessToken);

    // Give refresh 5 seconds buffer so it doesn't expire by the time it gets to API Gateway
    if (Date.now() - 5000 > (decodedToken.exp * 1000)) {
      refresh.requestNewAccessToken('azure_ad_oauth2', req.user.refreshToken, (err, accessToken, refreshToken, params) => {
        req.user.accessToken = accessToken;
        req.user.params = params;
        req.user.refreshToken = refreshToken;
        next();
      });
    } else {
      next();
    }
  } else {
    next();
  }
}

function setProxyRequest(proxyReq, req) {
  if (req.user) {
    proxyReq.setHeader('Authorization', `${req.user.params.token_type} ${req.user.accessToken}`);
    proxyReq.setHeader('Provider', req.user.profile.provider);
  }
}

// eslint-disable-next-line func-names
module.exports = function (app) {
  // Authentication related APIs
  app.get('/auth', passport.authenticate('azure_ad_oauth2'));
  app.get('/auth/callback',
    passport.authenticate('azure_ad_oauth2', { failureRedirect: '/login?error=You are not authorized to access this application' }),
    (req, res) => {
      if ((req.user && req.user.id && req.user.id.unique_name)) {
        const domain = req.user.id.unique_name.split('@')[1];
        if (ValidDomains) {
          const domains = ValidDomains.split(',');
          if (!domains.includes(domain)) {
            req.session.destroy();
            res.redirect('/login?error=Invalid user domain');
          }
        }
        res.redirect(lctreferer);
      }
    });

  app.post('/logout',
    (req, res) => {
      req.session.destroy();
      return res.status(204).send({});
    }
  );

  app.get('/keys',
    (req, res) => res.status(200).send(
      {
        appdynamicKey: process.env.APPDYNAMIC_API_KEY,
        bingApiKey: process.env.BING_API_KEY || 'Agxz0zau-DBduqU_H7aaL3FC_BYwxZsX1Tbqf7bx2clEhr30oXxJd5659uh8Io5H',
      })
  );

  app.get('/buildNumber',
    (req, res) => res.status(200).send(
      {
        buildNumber: process.env.LCT_APP_VERSION || 'dev',
      })
  );

  app.use('/api/v4/websocket',
    isAuthenticated,
    isTokenExpired,
    proxy({
      target: socketUrl || 'http://localhost:3001',
      changeOrigin: true,
      logLevel: 'debug',
      ws: true,
    })
  );

// For all finalized APIs
  app.use('/api',
    isAuthenticated,
    isTokenExpired,
    proxy({
      target: ApiUrl || 'http://localhost:3001',
      changeOrigin: true,
      logLevel: 'debug',
      ws: false,
      onProxyReq: setProxyRequest,
    })
  );

// For all APIs that are not yet finalized
  app.use('/fakeapi',
    isAuthenticated,
    isTokenExpired,
    proxy({
      target: MockApiUrl || 'http://localhost:3001',
      changeOrigin: true,
      logLevel: 'debug',
      ws: true,
      onProxyReq: setProxyRequest,
    })
  );
};

