const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];

// function evenOnly(num: number): number | undefined {
//   if (num % 2 === 0) {
//     return num;
//   }
// }

function stringSplice(string: string): string | undefined {
  if (string.includes('d') || string.includes('D')) {
    return '';
  } else {
    return string;
  }
}

const evens = numbers.filter((num) => num % 2 === 0);
const words = names.filter(stringSplice);
console.log('Even Numbers', evens);
console.log('No D', words);
