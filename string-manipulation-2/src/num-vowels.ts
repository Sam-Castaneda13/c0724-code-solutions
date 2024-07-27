/* exported numVowels */
function numVowels(string: string): number {
  let vowelCount = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === 'a' || string[i] === 'A') {
      vowelCount++;
    } else if (string[i] === 'e' || string[i] === 'E') {
      vowelCount++;
    } else if (string[i] === 'i' || string[i] === 'I') {
      vowelCount++;
    } else if (string[i] === 'o' || string[i] === 'O') {
      vowelCount++;
    } else if (string[i] === 'u' || string[i] === 'U') {
      vowelCount++;
    }
  }

  return vowelCount;
}
