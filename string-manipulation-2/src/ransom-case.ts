/* exported ransomCase */
function ransomCase(string: string): string {
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      string[i].toLowerCase();
    } else {
      string[i].toUpperCase();
    }
  }
  return string;
}
