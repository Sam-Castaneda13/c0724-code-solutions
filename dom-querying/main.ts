console.log('Hello, World');

const $element = document.querySelector('h1');
console.log('The value of $element is:', $element);
console.dir('The value of $element is:', $element);

const $idElement = document.querySelector('#explanation');
console.log('The value of $idElement is:', $idElement);
console.dir('The value of $idElement is:', $idElement);

const $classElement = document.querySelector('.hint');
console.log('The value of $classElement is:', $classElement);
console.dir('The value of $classElement is:', $classElement);

const $charElement = document.querySelectorAll('p');
console.log('The value of $charElement is:', $charElement);
console.dir('The value of $charElement is:', $charElement);

const $linkElement = document.querySelectorAll('.example-link');
console.log('The Value of $linkElement is:', $linkElement);
console.dir('The Value of $linkElement is:', $linkElement);
