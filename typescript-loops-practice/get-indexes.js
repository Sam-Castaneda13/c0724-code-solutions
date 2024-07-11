'use strict';
/* exported getIndexes */
function getIndexes(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array.indexOf(array[i]));
  }
  return newArray;
}
