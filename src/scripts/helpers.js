/**
 * Helpers
 */

(function(html) {

  'use strict';

  // Avoid console errors
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});
  while (length--) {
    method = methods[length];
    if (!console[method]) {
      console[method] = noop;
    }
  }

  // Replace `no-js` with `js`
  html.className = html.className.replace('no-js', 'js');

  // SVG test
  if (document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#Image', '1.1')) {
    html.className += ' svg';
  } else {
    html.className += ' no-svg';
    var images = document.getElementsByTagName('img');
    var regex = /.*\.svg$/i;
    for (var i = 0; i !== images.length; ++i) {
      if(images[i].src.match(regex)) {
        images[i].src = images[i].src.slice(0, -3) + 'png';
      }
    }
  }
}(document.documentElement));
