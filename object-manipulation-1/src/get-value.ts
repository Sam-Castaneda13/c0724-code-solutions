/* exported getValue */
function getValue(object: object, key: string): string[] {
  let prop = [];
  for (key in object) {
    prop = object[key];
  }
  return prop;
}
