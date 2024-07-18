/* exported takeRight */
function takeRight(array: unknown[], count: number): unknown {
  const newArray = [];
  for (let i = Math.max(0, array.length - count); i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
