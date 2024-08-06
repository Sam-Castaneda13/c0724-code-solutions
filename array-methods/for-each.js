'use strict';
const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];
console.log('In order:');
values.forEach((item) => {
  console.log(item);
});
const reverseVals = values.toReversed();
console.log('Reverse order:');
reverseVals.forEach((item) => {
  console.log(item);
});
