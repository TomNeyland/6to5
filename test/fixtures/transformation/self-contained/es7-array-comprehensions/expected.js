"use strict";

var _core = require("6to5-runtime/core-js");

var arr = (function () {
  var _arr = [];

  for (var _iterator = _core.$for.getIterator(nums), _step; !(_step = _iterator.next()).done;) {
    var i = _step.value;
    _arr.push(i * i);
  }

  return _arr;
})();
