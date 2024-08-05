'use strict';
const book1 = {
  title: 'Harry Potter Goblet of Fire',
  author: 'J.K. Rowling',
  libraryId: 1234,
};
const { title, author, libraryId } = book1;
console.log(
  `The title of the book is ${title}, the author is ${author}, and the library id is ${libraryId}`
);
const book2 = {
  title: 'Romance of the Three Kingdoms',
  author: 'Luo Guanzhong',
  libraryId: 4983,
};
const { title: title2, author: author2, libraryId: libraryId2 } = book2;
console.log(
  `The title of the book is ${title2}, the author is ${author2}, and the library id is ${libraryId2}`
);
const library = [
  {
    title: 'The Art of War',
    author: 'Sun Tzu',
    libraryId: 4085,
  },
  {
    title: 'Parasite',
    author: 'Hitoshi Iwaaki',
    libraryId: 2312,
  },
  {
    title: 'One Piece',
    author: 'Eiichiro Oda',
    libraryId: 5648,
  },
  {
    title: 'Berserk',
    author: 'Kentaro Miura',
    libraryId: 6656,
  },
];
const [book3, book4, book5] = library;
console.log('Book 3:', book3);
console.log('Book 4:', book4);
console.log('Book 5:', book5);
const [, , , book6] = library;
console.log('Book 6:', book6);
