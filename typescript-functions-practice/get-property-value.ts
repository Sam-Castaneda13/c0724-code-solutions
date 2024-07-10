/* exported getPropertyValue */
/* interface Person {
  name: string;
  occupation: string;
  birthPlace: string;
} */
function getPropertyValue(object: object, key: keyof object): string {
  return object[key];
}
