const width: number = 10;
const height: number = 10;
let area: number = 0;

area = width * height;
console.log('The area is: ', area);
console.log('The type of area is: ', typeof area);

const bill: number = 300;
const payment: number = 500;
let change: number = 0;

change = payment - bill;
console.log('The Change is: $', change);
console.log('The type of change is: ', typeof change);

const quizzes: number = 100;
const midterm: number = 90;
const final: number = 85;
let grade: number = 0;

grade = (quizzes * midterm * final) / 3;

console.log('The grade is: ', grade);
console.log('The type of grade is: ', typeof grade);

const firstName: string = 'Samuel';
const lastName: string = 'Castaneda';
let fullName: string = '';

fullName = firstName + ' ' + lastName;

console.log('Value of fullName: ', fullName);
console.log('Type of fullName: ', typeof fullName);

const ph: number = 6;
let isAcidic: boolean = false;

isAcidic = ph < 7;

console.log('The Value of isAcidic: ', isAcidic);
console.log('The type of isAcidic is: ', typeof isAcidic);

const headCount: number = 400;
let isSparta: boolean = true;

isSparta = headCount === 300;

console.log('The value of isSparta: ', isSparta);
console.log('The type of for isSparta: ', typeof isSparta);

let motto: string = '';

motto = fullName + ' is the GOAT';

console.log('The value of motto: ', motto);
console.log('The type of for motto: ', typeof motto);
