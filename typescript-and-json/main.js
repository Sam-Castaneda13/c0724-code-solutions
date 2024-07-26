'use strict';
const array = [
  {
    isbn: '1234-5678-90',
    title: 'Harry Potter and the Goblet of Fire',
    author: 'J.K Rowling',
  },
  {
    isbn: '0987-6543-21',
    title: 'Romance Of The Three Kingdoms',
    author: 'Luo Guanzhong',
  },
  {
    isbn: '5678-9012-34',
    title: 'The Art Of War',
    author: 'Sun Tzu',
  },
];
console.log('Value of the array: ', array);
console.log('The type of array:', typeof array);
const json1 = JSON.stringify(array);
console.log('The Value of json1', json1);
console.log('The type of json1', typeof json1);
const json2 = '{"id": 253467, "name": "Samuel"}';
console.log('The value of json2:', json2);
console.log('The type of json2', typeof json2);
const jsonObject = JSON.parse(json2);
console.log('The value of jsonObject', jsonObject);
console.log('THe type of jsonObject', typeof jsonObject);
