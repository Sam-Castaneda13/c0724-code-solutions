/* exported filterOutStrings */
function filterOutStrings(values: unknown[]): unknown[] {
  const newArray = [];
  let checker;
  for (let i = 0; i < values.length; i++) {
    checker = typeof values[i];
    if (checker !== 'string') {
      newArray.push(values[i]);
    }
  }
  return newArray;
}
