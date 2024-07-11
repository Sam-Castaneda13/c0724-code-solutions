'use strict';
/* exported getValue */
function getValue(object, key) {
  let prop = [];
  for (key in object) {
    prop = object[key];
  }
  return prop;
}
