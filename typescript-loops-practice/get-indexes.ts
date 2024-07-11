/* exported getIndexes */
function getIndexes(array: unknown[]): unknown[] {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(i);
  }
  return newArray;
}
