/* exported getKeys */
function getKeys(object: object): unknown[] {
  const newArray: string[] = [];
  for (const key in object) {
    newArray.push(key);
  }
  return newArray;
}
