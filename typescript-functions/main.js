'use strict';
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
const seconds = convertMinutesToSeconds(5);
console.log('The amount of seconds is:', seconds);
function greet(name) {
  return 'Hey ' + name + '!';
}
const greetResult = greet('Sam');
console.log(greetResult);
function getArea(width, height) {
  return width * height;
}
const area = getArea(17, 42);
console.log('The size of the area is: ', area);
function getFirstName(person) {
  const fName = person.firstName;
  return fName;
}
const fullName = {
  firstName: 'Samuel',
  lastName: 'Castaneda',
};
const mainName = getFirstName(fullName);
console.log(mainName);
function getLastElement(array) {
  const finalIndex = array[array.length - 1];
  return finalIndex;
}
const aRray = [100, 200, 300, 400];
const lastIndex = getLastElement(aRray);
console.log('The final index on the array is: ', lastIndex);
function callOtherFunction(otherFunction, params) {
  const answer = otherFunction(params);
  return answer;
}
const results = callOtherFunction(convertMinutesToSeconds, 10);
console.log('The value from the function convertMinutes is: ', results);
