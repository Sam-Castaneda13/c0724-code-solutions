/* exported isLowerCased */
function isLowerCased(word: string): boolean {
  if (word.toLowerCase() === word) {
    return true;
  } else {
    return false;
  }
}
