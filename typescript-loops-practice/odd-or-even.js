'use strict';
/* exported oddOrEven */
function oddOrEven(numbers) {
  const newArray = [];
  let checker;
  for (let i = 0; i < numbers.length; i++) {
    checker = numbers[i] % 2;
    if (checker === 0) {
      newArray.push('even');
    } else {
      newArray.push('odd');
    }
  }
  return newArray;
}
