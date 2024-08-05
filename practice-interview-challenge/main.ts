function getRangeReport(start: number, end: number): object {
  let total = 0;
  const evenArray = [];
  const oddArray = [];
  const range = [];
  let average = 0;
  for (let i = start; i <= end; i++) {
    // value for the total
    total += i;
    // value for range
    range.push(i);
    // value for evenArray and oddArray
    if (i % 2 === 0) {
      evenArray.push(i);
    } else {
      oddArray.push(i);
    }
  }
  // value for the average.
  average = total / range.length;
  // Creating the object
  const object = {
    average,
    evens: evenArray,
    odds: oddArray,
    range,
    total,
  };
  return object;
}

const checker = getRangeReport(1, 10);

console.log('The Value for the object:', checker);
