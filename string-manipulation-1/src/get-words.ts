/* exported getWords */
function getWords(string: string): unknown {
  const newArray: unknown = [];
  if (string) {
    return string.split(' ');
  } else {
    return newArray;
  }
}
