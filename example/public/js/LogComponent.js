/**
 * Log Component
 */
window.LogComponent = (function (window, document) {

  /* ========== */
  /* Properties */
  /* ========== */

  var element = document.getElementById('logTarget');
  var shouldLogToConsole = true;
  var shouldLogToElement = true;


  /* ======= */
  /* Methods */
  /* ======= */

  function clear() {
    /* clear browser console */
    if (shouldLogToConsole && console && console.clear) {
      console.clear();
    }
    /* clear app console */
    if (shouldLogToElement) {
      element.value = '';
      element.scrollTop = element.scrollHeight;
    }
  }

  function log() {
    /* log to browser console */
    if (shouldLogToConsole && console && console.dir) {
      console.dir.apply(console, arguments);
    }
    /* log to app console */
    if (shouldLogToElement) {
      element.value = ''; // clear first
      var args = Array.prototype.slice.call(arguments);
      for (var i = 0, l = args.length; i < l; i++) {
        element.value = element.value + (element.value.length ? '\n' : '') + JSON.stringify(args[i], null, 2);
      }
      element.scrollTop = 0;
    }
  }


  /* ===================================== */
  /* Publicly-Exposed Properties & Methods */
  /* ===================================== */

  return {
    clear: clear,
    log: log
  };

})(window, window.document);
