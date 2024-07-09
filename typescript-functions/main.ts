function convertMinutesToSeconds(minutes: number): number {
  return minutes * 60;
}

const seconds: number = convertMinutesToSeconds(5);

console.log('The amount of seconds is:', seconds);

function greet(name: string): string {
  return 'Hey ' + name + '!';
}

const greetResult: string = greet('Sam');

console.log(greetResult);

function getArea(width: number, height: number): number {
  return width * height;
}

const area: number = getArea(17, 42);

console.log('The size of the area is: ', area);
interface Person {
  firstName: string;
  lastName: string;
}
function getFirstName(person: Person): string {
  const fName: string = person.firstName;
  return fName;
}

const fullName: Person = {
  firstName: 'Samuel',
  lastName: 'Castaneda',
};
const mainName: string = getFirstName(fullName);

console.log(mainName);

function getLastElement(array: Array<number>): number {
  const finalIndex: number = array[array.length - 1];
  return finalIndex;
}

const aRray: Array<number> = [100, 200, 300, 400];

const lastIndex: number = getLastElement(aRray);

console.log('The final index on the array is: ', lastIndex);

function callOtherFunction(otherFunction: Function, params: unknown): any {
  const answer: number = otherFunction(params);
  return answer;
}

const results: number = callOtherFunction(convertMinutesToSeconds, 10);

console.log('The value from the function convertMinutes is: ', results);
