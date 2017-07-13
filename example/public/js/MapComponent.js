/**
 * Map Component
 */
window.MapComponent = (function (window, document, log) {

  /* ========== */
  /* Properties */
  /* ========== */

  var defaultLatitude      = 37.760516;
  var defaultLongitude     = -122.413126;
  var locationBeginElement = document.getElementById('locationBegin');
  var locationBeginMarker;
  var locationEndElement   = document.getElementById('locationEnd');
  var locationEndMarker;
  var mapElement           = document.getElementById('map');
  var mapObject;


  /* =================== */
  /* Convenience Methods */
  /* =================== */

  function forwardGeocode(address, callback) {
    var geocoder = new window.google.maps.Geocoder();
    var payload = {address: address};
    geocoder.geocode(payload, callback);
  }

  function reverseGeocode(latitude, longitude, callback) {
    var geocoder = new window.google.maps.Geocoder();
    var payload = {location: {lat: latitude, lng: longitude}};
    geocoder.geocode(payload, callback);
  }

  function getCurrentPosition(successCallback, failureCallback) {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(successCallback, failureCallback);
      return true;
    } else {
      return false;
    }
  }

  function getLocationBegin() {
    return {
      address:   locationBeginElement.value,
      latitude:  locationBeginMarker.position.lat(),
      longitude: locationBeginMarker.position.lng()
    };
  }

  function getLocationEnd() {
    return {
      address:   locationEndElement.value,
      latitude:  locationEndMarker.position.lat(),
      longitude: locationEndMarker.position.lng()
    };
  }


  /* =========== */
  /* Map Methods */
  /* =========== */

  function initializeMap(latitude, longitude, element) {
    return new window.google.maps.Map(element, {
      center: (new window.google.maps.LatLng(latitude, longitude)),
      mapTypeControl: false,
      signInControl: false,
      streetViewControl: false,
      zoom: 13
    });
  }

  function initializeMarker(latitude, longitude, map, label, title) {
    return new window.google.maps.Marker({
      draggable: true,
      label: label,
      map: map,
      position: (new window.google.maps.LatLng(latitude, longitude)),
      title: title
    });
  }

  /**
   * renderMarkerAtLocations (and renderMarkerAtLocationsHelper)
   * Renders a marker at several different locations (emulating movement).
   * @param {Object} marker A google.maps.marker.
   * @param {Array} locations An array of lat/lng pair objects in sequential order.
   * @param {integer} delayInMilliseconds The delay between frames in milliseconds.
   * @returns {boolean} result Whether or not the input values are valid.
   */
  function renderMarkerAtLocationsHelper(marker, locations, delayInMilliseconds) {
    if (locations.length) {
      /* render next location */
      var location = locations.shift();
      marker.setPosition(new window.google.maps.LatLng(location.lat, location.lng));
      if (!marker.getMap()) {marker.setMap(mapObject);}
      /* after delay, recurse with shifted array */
      window.setTimeout(function () {
        renderMarkerAtLocationsHelper(marker, locations, delayInMilliseconds);
      }, delayInMilliseconds);
    } else {
      /* all locations have been rendered, so remove marker */
      marker.setMap(null);
      delete marker;
    }
  }
  function renderMarkerAtLocations(marker, locations, delayInMilliseconds) {
    if (
      marker && marker.setPosition &&
      locations && locations.length &&
      (delayInMilliseconds !== 'undefined')
    ) {
      renderMarkerAtLocationsHelper(marker, locations, delayInMilliseconds);
      return true;
    } else {
      return false;
    }
  }

  /**
   * renderCarAtLocations
   * Renders a car icon at several different locations (emulating movement).
   * @param {Array} locations An array of lat/lng pair objects in sequential order.
   * @param {integer} delayInMilliseconds The delay between frames in milliseconds.
   * @returns {boolean} result Whether or not the input values are valid.
   */
  function renderCarAtLocations(locations, delayInMilliseconds) {
    var marker = new window.google.maps.Marker({
      draggable: false,
      icon:      '/images/ic_directions_car_black_24px.svg',
      map:       null,
      position:  (new window.google.maps.LatLng(0, 0)),
      title:     'Car'
    });
    return renderMarkerAtLocations(marker, locations, delayInMilliseconds);
  }


  /* ============== */
  /* Event Handlers */
  /* ============== */

  function onChangeLocationBeginElement(event) {
    forwardGeocode(event.target.value, function (results, status) {
      if (status === window.google.maps.GeocoderStatus.OK && results.length) {
        locationBeginMarker.setPosition(new window.google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng()));
      } else {
        log('onChangeLocationBeginElement:forwardGeocode failed', results, status);
      }
    });
  }

  function onChangeLocationEndElement(event) {
    forwardGeocode(event.target.value, function (results, status) {
      if (status === window.google.maps.GeocoderStatus.OK && results.length) {
        locationEndMarker.setPosition(new window.google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng()));
      } else {
        log('onChangeLocationEndElement:forwardGeocode failed', results, status);
      }
    });
  }

  function onChangeLocationBeginMarker(event) {
    reverseGeocode(event.latLng.lat(), event.latLng.lng(), function (results, status) {
      if (status === window.google.maps.GeocoderStatus.OK && results.length) {
        locationBeginElement.value = results[0].formatted_address;
      } else {
        log('onChangeLocationBeginMarker:reverseGeocode failed', results, status);
      }
    });
  }

  function onChangeLocationEndMarker(event) {
    reverseGeocode(event.latLng.lat(), event.latLng.lng(), function (results, status) {
      if (status === window.google.maps.GeocoderStatus.OK && results.length) {
        locationEndElement.value = results[0].formatted_address;
      } else {
        log('onChangeLocationEndMarker:reverseGeocode failed', results, status);
      }
    });
  }

  function __onGoogleMapsResponseHelper(latitude, longitude) {
    /* initialize mapObject & mapElement */
    mapObject = initializeMap(latitude, longitude, mapElement);
    /* initialize locationBeginMarker & locationBeginElement */
    locationBeginMarker = initializeMarker(latitude, longitude, mapObject, 'A', 'Pick Up Location');
    window.google.maps.event.addListener(locationBeginMarker, 'dragend', onChangeLocationBeginMarker);
    window.google.maps.event.trigger(locationBeginMarker, 'dragend', {
      latLng: {lat: function () {return latitude;}, lng: function () {return longitude;}}
    });
    /* initialize locationEndMarker & locationEndElement */
    locationEndMarker = initializeMarker(latitude, longitude, mapObject, 'B', 'Drop Off Location');
    window.google.maps.event.addListener(locationEndMarker, 'dragend', onChangeLocationEndMarker);
    window.google.maps.event.trigger(locationEndMarker, 'dragend', {
      latLng: {lat: function () {return latitude;}, lng: function () {return longitude;}}
    });
  }
  function onGoogleMapsResponse() {
    /* attempt automatic geolocation */
    getCurrentPosition(
      /* use detected location */
      function success(result) {__onGoogleMapsResponseHelper(result.coords.latitude, result.coords.longitude);},
      /* use default location */
      function failure() {__onGoogleMapsResponseHelper(defaultLatitude, defaultLongitude);}
    );
  }


  /* ===================================== */
  /* Publicly-Exposed Properties & Methods */
  /* ===================================== */

  return {
    getLocationBegin:             getLocationBegin,
    getLocationEnd:               getLocationEnd,
    onChangeLocationBeginElement: onChangeLocationBeginElement,
    onChangeLocationEndElement:   onChangeLocationEndElement,
    onGoogleMapsResponse:         onGoogleMapsResponse,
    renderCarAtLocations:         renderCarAtLocations
  };

})(window, window.document, (window.LogComponent ? window.LogComponent.log : console.log));
