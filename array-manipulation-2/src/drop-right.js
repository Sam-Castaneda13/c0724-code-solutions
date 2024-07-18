'use strict';
/* exported dropRight */
function dropRight(array, count) {
  const newArray = [];
  if (array.length >= count) {
    for (let i = 0; i < array.length - count; i++) {
      newArray.push(array[i]);
    }
  } else {
    return newArray;
  }
  return newArray;
}
