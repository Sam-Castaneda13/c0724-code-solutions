/* exported reverse */
function reverse(array: unknown[]): unknown[] {
  const newArray = [];
  for (let i = array.length - 1; i > -1; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
