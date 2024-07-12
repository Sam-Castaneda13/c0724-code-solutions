/* exported getValue */
function getValue(object: object, key: keyof object): unknown {
  const prop = object[key];

  return prop;
}
