"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Test = (function () {
  function Test() {
    _classCallCheck(this, Test);
  }

  _prototypeProperties(Test, null, {
    test: {
      value: function test() {
        return 5 + 5;
      },
      writable: true,
      configurable: true
    }
  });

  return Test;
})();