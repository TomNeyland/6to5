"use strict";

var _toArray = function (arr) {
  return Array.isArray(arr) ? arr : Array.from(arr);
};

add.apply(undefined, _toArray(numbers));
