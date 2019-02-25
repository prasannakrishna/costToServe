/**
 * Copyright © 2018, JDA Software Group, Inc. ALL RIGHTS RESERVED.
 * <p>
 * This software is the confidential information of JDA Software, Inc., and is licensed
 * as restricted rights software. The use,reproduction, or disclosure of this software
 * is subject to restrictions set forth in your license agreement with JDA.
 */
const cors = require('cors');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const passport = require('passport');
const setupAuth = require('../auth');
// const isDev = process.env.NODE_ENV !== 'production';

const corsOptions = {
  optionsSuccessStatus: 200,
};

const sessionOptions = {};
// if (!isDev) {
//   sessionOptions.path = '/app/sessions';
// }

const hour = 3600000;
module.exports = function(app) {
  setupAuth();
  app.use(cors(corsOptions));
  // add security related headers
  app.use((req, res, next) => {
    res.set({
      'X-Frame-Options': 'sameorigin',
      'Strict-Transport-Security': 'max-age=1000000000; includeSubDomains',
    });
    next();
  });
  app.use(
    session({
      store: new FileStore(sessionOptions),
      cookie: {
        maxAge: hour,
      },
      rolling: true,
      secret: 'dct-bff',
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((user, done) => done(null, user));
  passport.deserializeUser((id, done) => done(null, id));
};
