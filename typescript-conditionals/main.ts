/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */

function isUnderFive(number: number): boolean {
  return number < 5;
}

const isUnderFiveResult = isUnderFive(4);

console.log('The value of isUnderFiveResult:', isUnderFiveResult);

function isEven(number: number): boolean {
  const checker = number % 2;
  if (checker === 0) {
    return true;
  } else {
    return false;
  }
}

const isEvenResults = isEven(6);
console.log('The value of isEvenResults:', isEvenResults);

function startsWithJ(string: string): boolean {
  const checker = string[0];
  if (checker === 'j' || checker === 'J') {
    return true;
  } else {
    return false;
  }
}

const startsWithJResults = startsWithJ('Python');
console.log('The value of startsWithJResults:', startsWithJResults);

interface Person {
  name: string;
  age: number;
}

function isOldEnoughToDrink(person: Person): boolean {
  if (person.age > 21) {
    return true;
  } else {
    return false;
  }
}

const canDrinkChecker = isOldEnoughToDrink({
  name: 'Bartholomew JoJo Simpson',
  age: 23,
});

console.log('The Value of isOldEnoughToDrinkResults:', canDrinkChecker);

function isOldEnoughToDrive(person: Person): boolean {
  if (person.age > 16) {
    return true;
  } else {
    return false;
  }
}

const canDriveChecker = isOldEnoughToDrive({
  name: 'Bartholomew JoJo Simpson',
  age: 23,
});

console.log('The Value of isOldEnoughToDriveResults:', canDriveChecker);

function isOldEnoughToDriveAndDrive(person: Person): boolean {
  if (person.age > 16) {
    return false;
  } else if (person.age > 20) {
    return false;
  } else {
    return false;
  }
}

const canDriveAndDrink = isOldEnoughToDriveAndDrive({
  name: 'Bartholomew JoJo Simpson',
  age: 23,
});

console.log(
  'The Value of isOldEnoughToDriveAndDrinkResults:',
  canDriveAndDrink
);

function categorizeAcidity(pH: number): string {
  if (pH < 7) {
    return 'acid';
  } else if (pH === 7) {
    return 'neutral';
  } else if (pH > 7 && pH < 15) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

const isAcidic = categorizeAcidity(16);
console.log('The value of categorizeAcidityResults:', isAcidic);

function introduceWarnerBro(name: string): string {
  switch (name) {
    case 'yakko':
      return "We're the warner brothers!";
      break;
    case 'wakko':
      return "We're the warner brothers!";
      break;
    case 'dot':
      return "I'm cute~";
      break;
    default:
      return 'Goodnight everybody!';
      break;
  }
}

const intro = introduceWarnerBro('dot');
console.log('The Value of introduceWarnerBroResult: ', intro);

function recommendMovie(genre: string): string {
  switch (genre) {
    case 'action':
      return 'You should watch Bad Boys';
      break;
    case 'comedy':
      return "You should watch Ferris Bueller's Day Off";
      break;
    case 'horror':
      return 'You should watch Train to Busan';
      break;
    case 'drama':
      return 'You should watch The Pursuit of Happiness';
      break;
    case 'musical':
      return 'You should watch In The Heights';
      break;
    case 'sci-fi':
      return 'You should watch Star-Wars';
      break;
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi.';
      break;
  }
}

const goodMovies = recommendMovie('horror');
console.log(goodMovies);
