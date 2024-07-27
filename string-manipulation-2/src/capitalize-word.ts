/* exported capitalizeWord */

function capitalizeWord(word: string): string {
  let capital: string = '';
  let lower: string = '';
  let correctWord: string = '';

  if (word[0] !== 'j' && word[0] !== 'J') {
    capital = word[0];

    capital = capital.toUpperCase();

    for (let i = 1; i < word.length; i++) {
      lower += word[i];
    }

    lower = lower.toLowerCase();

    correctWord = capital + lower;

    return correctWord;
  } else {
    for (let i = 0; i < word.length; i++) {
      if (word[i] === 's' || word[i] === 'S') {
        correctWord += word[i].toUpperCase();
      } else if (word[i] === word[0]) {
        correctWord += word[i].toUpperCase();
      } else {
        correctWord += word[i].toLowerCase();
      }
    }
    return correctWord;
  }
}
