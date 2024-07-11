/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen(): Array<number> {
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

function getEvenNumbersToTwenty(): Array<number> {
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

function repeatWord(word: string, time: number): string {
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

function logEachCharacter(str: string): unknown {
  const a = 0;
  for (let i = 0; i < str.length; ++i) {
    console.log(str[i]);
  }
  return a;
}
logEachCharacter('Spider-Man');

function doubleAll(number: Array<number>): Array<number> {
  const doubled = [];
  for (let i = 0; i < number.length; ++i) {
    doubled.push(number[i] + number[i]);
  }
  return doubled;
}

const array1 = [1, 3, 5, 7, 9];
const results4 = doubleAll(array1);
console.log('The Value of doubleAllResults:', results4);

type PetNames = 'Luna' | 'Solar' | 'Estrella';

interface PetInfo {
  age: number;
  breed: string;
}

const pets: Record<PetNames, PetInfo> = {
  Luna: { age: 12, breed: 'Australian Sheared' },
  Solar: { age: 15, breed: 'Black and White' },
  Estrella: { age: 13, breed: 'Grey striped' },
};
function getKeys(obj: Record<string, unknown>): Array<unknown> {
  const keys = [];
  for (const key in obj) {
    keys.push(key);
  }
  return keys;
}

const results5 = getKeys(pets);
console.log(results5);

function getValues(obj: Record<string, unknown>): Array<unknown> {
  const values = [];
  for (const key in obj) {
    values.push(obj[key]);
  }
  return values;
}

const results6 = getValues(pets);
console.log(results6);
