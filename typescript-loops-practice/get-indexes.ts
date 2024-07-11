/* exported getIndexes */
function getIndexes(array: unknown[]): unknown[] {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array.indexOf(array[i]));
  }
  return newArray;
}
