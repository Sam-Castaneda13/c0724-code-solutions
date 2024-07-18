'use strict';
/* exported drop */
function drop(array, count) {
  const newArray = [];
  for (let i = count; i < array.length; i++) {
    if (array[i] !== undefined) {
      newArray.push(array[i]);
    } else {
      return newArray;
    }
  }
  return newArray;
}
