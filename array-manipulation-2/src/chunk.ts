/* exported chunk */
function chunk(array: unknown[], size: number): unknown[] {
  const newArray: unknown[] = [];
  let i = 0;
  while (i < array.length) {
    newArray.push(array.slice(i, i + size));
    i += size;
  }
  return newArray;
}
