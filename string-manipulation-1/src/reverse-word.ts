/* exported reverseWord */
function reverseWord(word: string): string {
  let newWord = '';
  for (let i = word.length - 1; i > -1; i--) {
    newWord += word[i];
  }
  return newWord;
}
