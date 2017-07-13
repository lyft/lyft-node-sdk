/* dependencies */
var express = require('express');
var expressSession = require('express-session');
var NeDBSessionStore = require('nedb-session-store')(expressSession);
var path = require('path');

/* global configuration */
var config = require('./config/config');

/* controllers */
var apiController = require('./controllers/api');
var apiLyftController = require('./controllers/api/lyft');
var oauthLyftController = require('./controllers/oauth/lyft');

/* express configuration */
var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

/* express middleware */
app.use(
  expressSession({
    secret: config.SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
    cookie: {
      path: '/',
      httpOnly: true,
      maxAge: 365 * 24 * 60 * 60 * 1000 /* 1 year */
    },
    store: new NeDBSessionStore({
      filename: path.join(__dirname, 'databases/sessions.db')
    })
  })
);
app.use(
  express.static(
    path.join(__dirname, 'public'),
    { maxAge: 3600000 }
  )
);
app.use(function (req, res, next) {
  /* miscellaneous response headers */
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

/* express routing: api */
app.get('/api/status', apiController.getStatus);
app.get('/api/users', apiController.getUsers);

/* express routing: lyft api */
app.get('/api/lyft/drivers', apiLyftController.getDrivers);
app.get('/api/lyft/cost', apiLyftController.getCost);
app.get('/api/lyft/eta', apiLyftController.getEta);
app.get('/api/lyft/profile', apiLyftController.getProfile);
app.get('/api/lyft/rides', apiLyftController.getRides);
app.get('/api/lyft/ridetypes', apiLyftController.getRideTypes);
app.get('/api/lyft/status', apiLyftController.getStatus);

/* express routing: lyft oauth */
app.all('/oauth/lyft/authorization', oauthLyftController.handleAuthorization);
app.all('/oauth/lyft/landing', oauthLyftController.handleLanding);
app.all('/oauth/lyft/revocation', oauthLyftController.handleRevocation);

/* express routing: render */
app.get('/', function (req, res, next) {
  res.render('index', {
    GOOGLE_API_KEY: config.GOOGLE_API_KEY
  });
});

/* express invocation */
app.listen(config.PORT, function () {
  console.log([
    '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
    'lyft-node-sdk-example running',
    ' => http://localhost:' + config.PORT,
    ' => [ ctrl + c ] to quit',
    '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'
  ].join('\n'));
});
