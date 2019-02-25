/**
 * Copyright © 2018, JDA Software Group, Inc. ALL RIGHTS RESERVED.
 * <p>
 * This software is the confidential information of JDA Software, Inc., and is licensed
 * as restricted rights software. The use,reproduction, or disclosure of this software
 * is subject to restrictions set forth in your license agreement with JDA.
 */
const passport = require('passport');
const jwt = require('jsonwebtoken');
const AzureAdOAuth2Strategy = require('passport-azure-ad-oauth2').Strategy;
const refresh = require('passport-oauth2-refresh');
const callbackURL =
  process.env.OAUTH_AZURE_AD_CALLBACK_URL ||
  'http://localhost:3000/auth/callback';
const clientID =
  process.env.CLIENT_ID || 'b9c6d7a1-7441-40f5-b054-dfa24bd7945e';
const clientSecret =
  process.env.CLIENT_SECRET || 'HHvYM4i2yVzGaZhZXHj7VJ/iaHreZNu14wftVhbgToY=';
const resource = process.env.RESOURCE || '00000002-0000-0000-c000-000000000000';
const azStrategy = new AzureAdOAuth2Strategy(
  {
    clientID,
    callbackURL,
    clientSecret,
    resource,
  },
  (accessToken, refreshToken, params, profile, done) => {
    // currently we can't find a way to exchange access token by user info (see userProfile implementation), so
    // you will need a jwt-package like https://github.com/auth0/node-jsonwebtoken to decode id_token and get waad profile
    const user = {
      accessToken,
      refreshToken,
      profile,
      id: jwt.decode(params.id_token),
      params,
    };
    return done(null, user);
  },
);

azStrategy.authorizationParams = function(options) {
  return {
    ...options,
    prompt: 'select_account',
  };
};

module.exports = function setup() {
  passport.use('azure_ad_oauth2', azStrategy);
  refresh.use(azStrategy);
};
