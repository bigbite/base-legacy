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
