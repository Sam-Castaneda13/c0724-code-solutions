/* exported compact */
function compact(array: unknown[]): unknown[] {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    const checker = Boolean(array[i]);

    if (checker !== false) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
