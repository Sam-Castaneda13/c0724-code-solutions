'use strict';
/* exported compact */
function compact(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Boolean(array[i]) === false) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
