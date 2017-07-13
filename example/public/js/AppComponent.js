/**
 * App Component
 */
window.AppComponent = (function (window, document, api, log, map) {

  /* ========== */
  /* Properties */
  /* ========== */

  /* none at this time */


  /* ======= */
  /* Methods */
  /* ======= */

  function showDrivers(latitude, longitude) {
    return api.getApiLyftDrivers(latitude, longitude, function (res) {
      for (var i = 0, l = res.nearby_drivers.length; i < l; i++) {
        for (var j = 0, m = res.nearby_drivers[i].drivers.length; j < m; j++) {
          map.renderCarAtLocations(res.nearby_drivers[i].drivers[j].locations, 1000);
        }
      }
    });
  }


  /* ===================================== */
  /* Publicly-Exposed Properties & Methods */
  /* ===================================== */

  return {
    showDrivers: showDrivers
  };

})(window, window.document, window.ApiComponent, window.LogComponent, window.MapComponent);
