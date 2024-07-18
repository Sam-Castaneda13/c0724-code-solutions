'use strict';
/* exported take */
function take(array, count) {
  const newArray = [];
  for (let i = 0; i < count; i++) {
    if (array[i] !== undefined) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
