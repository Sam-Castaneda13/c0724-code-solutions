/* exported getValues */
function getValues(object: object): unknown[] {
  const array: unknown[] = [];
  for (const key in object) {
    array.push(object[key]);
  }
  return array;
}
