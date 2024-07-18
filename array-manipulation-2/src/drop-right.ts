/* exported dropRight */
function dropRight(array: unknown[], count: number): unknown[] {
  const newArray: unknown[] = [];
  if (array.length >= count) {
    for (let i = 0; i < array.length - count; i++) {
      newArray.push(array[i]);
    }
  } else {
    return newArray;
  }
  return newArray;
}
