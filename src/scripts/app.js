/**
 * App
 */
var bb = (function () {
  'use strict';

  var exports = {};

  /**
   * Initialises all the modules
   */
  exports.init = function () {

    // Utils
    exports.jsDetect.addClass();
    exports.svgDetect.addClass();
    exports.svgDetect.svgToPng();

    // Modules
    exports.example.publicMethod();
  };

  return exports;
})();
