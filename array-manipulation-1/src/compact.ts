/* exported compact */
function compact(array: unknown[]): unknown[] {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Boolean(array[i]) === false) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
