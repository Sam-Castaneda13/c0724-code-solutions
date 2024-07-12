'use strict';
/* exported toObject */
function toObject(keyValuePair) {
  const a = keyValuePair[0];
  const b = keyValuePair[1];
  const object = {};
  object[a] = b;
  return object;
}
