/**
 * API Component
 */
window.ApiComponent = (function (window, document, log) {

  /* ========== */
  /* Properties */
  /* ========== */

  /* none at this time */


  /* =================== */
  /* Convenience Methods */
  /* =================== */

  function requestJson(method, url, successCallback, failureCallback) {
    successCallback = successCallback || console.log;
    failureCallback = failureCallback || console.error || console.warn || console.log;
    var xhr = (typeof XDomainRequest !== 'undefined') ?
      (new XDomainRequest()) :
      (new XMLHttpRequest());
    xhr.onreadystatechange = function (event) {
      if (event.target.readyState === 4) {
        /* parse response as JSON */
        var responseJson;
        try { responseJson = window.JSON.parse(event.target.response); }
        catch (exception) { return failureCallback(event.target.response, exception); }
        /* perform callback according to HTTP status code */
        if (xhr.status > 0 && xhr.status < 400) {
          return successCallback(responseJson);
        } else {
          return failureCallback(responseJson);
        }
      }
    };
    xhr.open(method, url, true);
    xhr.send();
  }


  /* =========== */
  /* API Methods */
  /* =========== */

  function getApiStatus(successCallback, failureCallback) {
    successCallback = successCallback || function (res) {
      log('local server status: ' + res.status + ' @ ' + res.meta.timestamp);
    };
    return requestJson('GET', '/api/status', successCallback, failureCallback);
  }

  function getApiUsers(successCallback, failureCallback) {
    successCallback = successCallback || function (res) {
      for (var i = 0, l = res.users.length; i < l; i++) {
        log('hasLyftAuthorizationCode: ' + res.users[i].hasLyftAuthorizationCode);
        log('lyftStatus: ' + res.users[i].lyftStatus);
      }
    };
    return requestJson('GET', '/api/users', successCallback, failureCallback);
  }


  /* ================ */
  /* Lyft API Methods */
  /* ================ */

  function getApiLyftCost(startLatitude, startLongitude, endLatitude, endLongitude, rideType, successCallback, failureCallback) {
    successCallback = successCallback || function (res) {
      log(res.cost_estimates);
    };
    var ride_type = rideType ? rideType : 'lyft';
    url += '&ride_type=' + ride_type;

    var url = '/api/lyft/cost?start_lat=' + startLatitude + '&start_lng=' + startLongitude;
    if (endLatitude) { url += '&end_lat=' + endLatitude; }
    if (endLongitude) { url += '&end_lng=' + endLongitude; }
    return requestJson('GET', url, successCallback, failureCallback);
  }

  function getApiLyftDrivers(latitude, longitude, successCallback, failureCallback) {
    successCallback = successCallback || function (res) {
      log(res.nearby_drivers);
    };
    return requestJson('GET', '/api/lyft/drivers?lat=' + latitude + '&lng=' + longitude, successCallback, failureCallback);
  }

  function getApiLyftEta(latitude, longitude, successCallback, failureCallback) {
    successCallback = successCallback || function (res) {
      log(res.eta_estimates);
    };
    return requestJson('GET', '/api/lyft/eta?lat=' + latitude + '&lng=' + longitude, successCallback, failureCallback);
  }

  function getApiLyftProfile(successCallback, failureCallback) {
    successCallback = successCallback || function (res) {
      log(res);
    };
    return requestJson('GET', '/api/lyft/profile', successCallback, failureCallback);
  }

  function getApiLyftRides(successCallback, failureCallback) {
    var start_time = (new Date(Date.now() - (30 * 24 * 60 * 60 * 1000))).toISOString();
    var end_time = (new Date()).toISOString();
    successCallback = successCallback || function (res) {
      log(res.ride_history);
    };
    requestJson('GET', '/api/lyft/rides?start_time=' + start_time + '&end_time=' + end_time, successCallback, failureCallback);
  }

  function getApiLyftRideTypes(latitude, longitude, successCallback, failureCallback) {
    successCallback = successCallback || function (res) {
      log(res.ride_types);
    };
    requestJson('GET', '/api/lyft/ridetypes?lat=' + latitude + '&lng=' + longitude, successCallback, failureCallback);
  }

  function getApiLyftStatus(successCallback, failureCallback) {
    successCallback = successCallback || function (res) {
      log('remote server status: ' + res.status + ' @ ' + res.meta.timestamp);
    };
    requestJson('GET', '/api/lyft/status', successCallback, failureCallback);
  }


  /* ===================================== */
  /* Publicly-Exposed Properties & Methods */
  /* ===================================== */

  return {
    getApiStatus: getApiStatus,
    getApiUsers: getApiUsers,
    getApiLyftCost: getApiLyftCost,
    getApiLyftDrivers: getApiLyftDrivers,
    getApiLyftEta: getApiLyftEta,
    getApiLyftProfile: getApiLyftProfile,
    getApiLyftRides: getApiLyftRides,
    getApiLyftRideTypes: getApiLyftRideTypes,
    getApiLyftStatus: getApiLyftStatus
  };

})(window, window.document, (window.LogComponent ? window.LogComponent.log : console.log));
