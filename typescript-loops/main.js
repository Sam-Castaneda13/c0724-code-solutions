'use strict';
/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  const numbers = [];
  let currentNumber = 1;
  while (currentNumber < 11) {
    numbers.push(currentNumber);
    ++currentNumber;
  }
  return numbers;
}
let results1 = [];
results1 = getNumbersToTen();
console.log(results1);
function getEvenNumbersToTwenty() {
  const evenNumbers = [];
  let currentNumber = 2;
  while (currentNumber < 21) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}
const results2 = getEvenNumbersToTwenty();
console.log('The value of getEvenNumberToTwentyResults:', results2);
function repeatWord(word, time) {
  let count = 1;
  let repeated = '';
  while (count < time) {
    repeated += ' ' + word;
    ++count;
  }
  return repeated;
}
const results3 = repeatWord('Spider-Man', 10);
console.log('The value of repeatWordResults:', results3);
function logEachCharacter(str) {
  const a = 0;
  for (let i = 0; i < str.length; ++i) {
    console.log(str[i]);
  }
  return a;
}
logEachCharacter('Spider-Man');
function doubleAll(number) {
  const doubled = [];
  for (let i = 0; i < number.length; ++i) {
    doubled.push(number[i] + number[i]);
  }
  return doubled;
}
const array1 = [1, 3, 5, 7, 9];
const results4 = doubleAll(array1);
console.log('The Value of doubleAllResults:', results4);
const pets = {
  Luna: { age: 12, breed: 'Australian Sheared' },
  Solar: { age: 15, breed: 'Black and White' },
  Estrella: { age: 13, breed: 'Grey striped' },
};
function getKeys(obj) {
  const keys = [];
  for (const key in obj) {
    keys.push(key);
  }
  return keys;
}
const results5 = getKeys(pets);
console.log(results5);
function getValues(obj) {
  const values = [];
  for (const key in obj) {
    values.push(obj[key]);
  }
  return values;
}
const results6 = getValues(pets);
console.log(results6);
