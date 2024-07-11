'use strict';
/* exported compact */
function compact(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    const checker = Boolean(array[i]);
    if (checker !== false) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
