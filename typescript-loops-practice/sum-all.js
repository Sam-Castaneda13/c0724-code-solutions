'use strict';
/* exported sumAll */
function sumAll(numbers) {
  let sumAll = 0;
  for (let i = 0; i < numbers.length; i++) {
    sumAll += numbers[i];
  }
  return sumAll;
}
