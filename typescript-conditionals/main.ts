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
  if (person.age > 20) {
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
  if (person.age > 15) {
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
  if (person.age > 15 && person.age > 20) {
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
  if (pH < 7 && pH > -1) {
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
    case 'wakko':
      return "We're the warner brothers!";
    case 'dot':
      return "I'm cute~";
    default:
      return 'Goodnight everybody!';
  }
}

const intro = introduceWarnerBro('dot');
console.log('The Value of introduceWarnerBroResult: ', intro);

function recommendMovie(genre: string): string {
  switch (genre) {
    case 'action':
      return 'You should watch Bad Boys';
    case 'comedy':
      return "You should watch Ferris Bueller's Day Off";
    case 'horror':
      return 'You should watch Train to Busan';
    case 'drama':
      return 'You should watch The Pursuit of Happiness';
    case 'musical':
      return 'You should watch In The Heights';
    case 'sci-fi':
      return 'You should watch Star-Wars';
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi.';
  }
}

const goodMovies = recommendMovie('horror');
console.log(goodMovies);
