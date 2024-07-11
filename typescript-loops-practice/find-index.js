'use strict';
/* exported findIndex */
function findIndex(array, value) {
  let answer = -1;
  for (let i = 0; i < array.length; i++) {
    answer++;
    if (array[i] === value) {
      return answer;
    }
  }
  return -1;
}
