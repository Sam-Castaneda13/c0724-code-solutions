/* exported drop */
function drop(array: unknown[], count: number): unknown {
  const newArray = [];

  for (let i = count; i < array.length; i++) {
    if (array[i] !== undefined) {
      newArray.push(array[i]);
    } else {
      return newArray;
    }
  }
  return newArray;
}
