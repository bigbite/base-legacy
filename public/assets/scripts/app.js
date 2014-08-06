/*! Big Bite Creative | bigbitecreative.com | Copyright (c) 2014 */
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

/**
 * jsDetect
 * @return {Object}
 */
bb.jsDetect = (function () {
  var exports =  {};
  var docEl = document.documentElement;

  exports.addClass = function () {
    docEl.className = docEl.className.replace('no-js', 'js');
  };

  return exports;
})();

/**
 * SVG Detection
 * @return {Object}
 */
bb.svgDetect = (function () {
  'use strict';

  var exports =  {};
  var docEl = document.documentElement;

  /**
   * Check if SVG is supported.
   * @return {Boolean} Returns true if is supported
   */
  exports.isSupported = function () {
    return !!document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#Image', '1.1')
  };

  /**
   * Add `.svg` class to the <html> tag
   */
  exports.addClass = function () {
    if (exports.isSupported) {
      docEl.className += ' svg';
    } else {
      docEl.className += ' no-svg';
    }
  };

  /**
   * Replaces `.svg` with `.png`
   */
  exports.svgToPng = function () {
    if (exports.isSupported) {
      var images = document.getElementsByTagName('img');
      var regex = /.*\.svg$/i;
      for (var i = 0; i !== images.length; ++i) {
        if(images[i].src.match(regex)) {
          images[i].src = images[i].src.slice(0, -3) + 'png';
        }
      }
    }
  };

  return exports;
})();

/**
 * Example module.
 * @return {Object}
 */
bb.example = (function () {
  'use strict';

  var exports =  {};

  /**
   * Example private method
   */
  var _privateMethod = function () {
    // This can only be used inside this module.
  };

  /**
   * Example public method
   */
  exports.publicMethod = function () {
    // This is public.
  };

  return exports;
})();
