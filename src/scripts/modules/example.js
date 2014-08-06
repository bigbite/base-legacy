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
