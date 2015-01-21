"use strict";

var _extends = function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      target[key] = source[key];
    }
  }

  return target;
};

var foo = _extends({}, bar);

var foo = _extends({}, bar, {
  bar: "foo" });

var foo = _extends({}, bar, {
  bar: "foo"
});
