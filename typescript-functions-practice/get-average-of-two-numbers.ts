/* exported getAverageOfTwoNumbers */
function getAverageOfTwoNumbers(x: number, y: number): number {
  const q: number = (x + y) / 2;
  return q;
}

const getAverageOfTwoNumbersResults: number = getAverageOfTwoNumbers(5, 6);
console.log(getAverageOfTwoNumbersResults);
