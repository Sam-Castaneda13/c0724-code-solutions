/* exported firstChars */
function firstChars(length: number, string: string): string {
  let firstChars = '';
  for (let i = 0; i < length; i++) {
    if (string[i]) firstChars += string[i];
  }

  return firstChars.trim();
}
