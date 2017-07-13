/* dependencies */
var request = require('request');
var rp = require('request-promise');

/*
NOTE: in your application, this would be:
var lyft = require('node-lyft');
*/
var lyft = require('../../../../lib/index.js');
var defaultClient = lyft.ApiClient.instance;

/* global configuration */
var config = require('../../../config/config');

/* ============== */
/* Helper Methods */
/* ============== */

var getPublicCode = function (req, res) {
  return rp({
    method: 'POST',
    uri: config.LYFT_API_URI + '/oauth/token',
    auth: {
      username: config.LYFT_CLIENT_ID,
      password: (config.USE_SANDBOX ? 'SANDBOX-' : '') + config.LYFT_CLIENT_SECRET
    },
    json: {
      grant_type: 'client_credentials',
      scope: 'public'
    }
  })
}

var publicRequest = function (res, cb) {
  getPublicCode()
    .then((codeResponse) => {
      defaultClient.authentications['User Authentication'].accessToken = codeResponse.access_token;
      var lyftPublicApi = new lyft.PublicApi();

      cb(lyftPublicApi).then((response) => res.status(200).json(response))
        .catch((err) => {
          res.status(400).json({ error: err })
        });
    })
    .catch((err) => {
      res
        .status(preAuthResponse.statusCode)
        .json({ meta: { success: false, error: err } });
    })
};

var requestWithClientToken = function (req, res, cb, token) {
  defaultClient.authentications['User Authentication'].accessToken = token;
  var lyftUserApi = new lyft.UserApi();
  cb(lyftUserApi)
    .then((response) => res.status(200).json(response))
    .catch((err) => {
      res.status(400).json({ error: err })
    });
}

var getCode = function (req, res) {
  return rp({
    method: 'POST',
    uri: config.LYFT_API_URI + '/oauth/token',
    auth: {
      username: config.LYFT_CLIENT_ID,
      password: (config.USE_SANDBOX ? 'SANDBOX-' : '') + config.LYFT_CLIENT_SECRET
    },
    json: {
      grant_type: 'authorization_code',
      code: req.session.lyftAuthorizationCode
    }
  });
}

var getOathToken = function (res) {
  return res.redirect('/oauth/lyft/authorization');
}

var clientRequest = function (req, res, cb) {

  if (!req.session.lyftAuthorizationCode) {
    return getOathToken(res);
  }

  getCode(req, res)
    .then((codeResponse) => {
      requestWithClientToken(req, res, cb, codeResponse.access_token)
    })
    .catch(err => getOathToken(res));
};

/* ============== */
/* Route Handlers */
/* ============== */

exports.getDrivers = function (req, res, next) {

  function cb(lyftApi) {
    return lyftApi.getDrivers(req.query.lat, req.query.lng);
  }
  publicRequest(res, cb);

};

exports.getCost = function (req, res, next) {
  function cb(lyftApi) {
    let opts = {
      endLat: parseFloat(req.query.end_lat),
      endLng: parseFloat(req.query.end_lng),
      ride_type: req.query.ride_type ? req.query.ride_type : 'lyft'
    };
    return lyftApi.getCost(req.query.start_lat, req.query.start_lng, opts);
  }
  publicRequest(res, cb);
};

exports.getEta = function (req, res, next) {
  function cb(lyftApi) {
    return lyftApi.getETA(req.query.lat, req.query.lng);
  }
  publicRequest(res, cb);
};

exports.getProfile = function (req, res, next) {
  function cb(lyftApi) {
    return lyftApi.getProfile();
  }
  clientRequest(req, res, cb);
};

exports.getRides = function (req, res, next) {
  function cb(lyftApi) {
    var opts = {}
    if (req.query.end_time) {
      opts.endTime = req.query.end_time
    }
    return lyftApi.getRides(req.query.start_time, opts);
  }
  clientRequest(req, res, cb);
};

exports.getRideTypes = function (req, res, next) {
  function cb(lyftApi) {
    return lyftApi.getRideTypes(req.query.lat, req.query.lng);
  }
  publicRequest(res, cb);
};

exports.getStatus = function (req, res, next) {
  request.get(config.LYFT_API_URI + '/v1', function (error, response, body) {
    if (error) {
      res
        .status(400)
        .json({ meta: { success: false, error: error }, status: 'unhappy' });
    } else {
      var timestamp = response.headers['date'] ? (new Date(response.headers['date'])).getTime() : '';
      res
        .status(200)
        .json({ meta: { success: true, timestamp: timestamp }, status: 'happy' });
    }
  });
};
