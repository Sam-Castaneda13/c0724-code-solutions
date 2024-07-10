const hero = ['Spider-man', 'Invincible', 'Batman', 'IronMan'];
let randomNumber = Math.random();
randomNumber = randomNumber * hero.length;

const randomIndex = Math.floor(randomNumber);
console.log('The value of randomIndex:', randomIndex);

const randomHero = hero[randomIndex];
console.log('The value of randomHero:', randomHero);

const library = [
  {
    title: 'Harry Potter, Deathly Hollows',
    author: 'J.K Rowling',
  },
  {
    title: 'Spider-man issue 1',
    author: 'Stan Lee',
  },
  {
    title: 'Romance of the Three Kingdoms',
    author: 'Luo Guanzhong',
  },
];

const lastBook = library.pop();
console.log('The value for lastBook: ', lastBook);

const firstBook = library.shift();
console.log('The value of firstBook: ', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Raushmayer',
};

const css = {
  title: 'Css Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);

library.splice(1, 1);
console.log('The Value of library: ', library);

const fullName = 'Samuel Castaneda';

const firstAndLastName = fullName.split(' ');
console.log('The value of firstAndLastName:', firstAndLastName);

const firstName = firstAndLastName[0];

const sayMyName = firstName.toUpperCase();
console.log('The value of sayMyName:', sayMyName);

const employee = {
  name: 'Samuel Castaneda',
  age: 21,
  position: 'Server',
};

const employeeKeys = Object.keys(employee);
console.log('The value of employeeKeys:', employeeKeys);

const employeeValues = Object.values(employee);
console.log('The value of employeeValues: ', employeeValues);

const employeePairs = Object.entries(employee);
console.log('The Value of employeePairs:', employeePairs);
