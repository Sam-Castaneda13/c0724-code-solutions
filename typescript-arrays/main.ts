const colors: Array<string> = ['red', 'white', 'blue'];

console.log('Value of color[0]: ', colors[0]);
console.log('Value of color[1]: ', colors[1]);
console.log('Value of color[2]: ', colors[2]);

const america: string = `America is ${colors[0]}, ${colors[2]},
                      and ${colors[2]}.`;
console.log(america);

colors[2] = 'green';

const Mexico: string = `Mexico is  ${colors[0]}, ${colors[2]},
                      and ${colors[2]}.`;

console.log(Mexico);
console.log('The values of colors: ', colors);
console.log('The type of colors: ', typeof colors);

const students: Array<string> = ['Samuel', 'Jack', 'Ian', 'Sean'];

const numberOfStudents: number = students.length;

console.log('The length of students: ', numberOfStudents);

const lastIndex: number = numberOfStudents - 1;
const lastStudent: string = students[lastIndex];

console.log('The last value of students: ', lastStudent);
console.log('The type of students: ', typeof students);
