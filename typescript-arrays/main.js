'use strict';
const colors = ['red', 'white', 'blue'];
console.log('Value of color[0]: ', colors[0]);
console.log('Value of color[1]: ', colors[1]);
console.log('Value of color[2]: ', colors[2]);
const america = `America is ${colors[0]}, ${colors[2]},
                      and ${colors[2]}.`;
console.log(america);
colors[2] = 'green';
const Mexico = `Mexico is  ${colors[0]}, ${colors[2]},
                      and ${colors[2]}.`;
console.log(Mexico);
console.log('The values of colors: ', colors);
console.log('The type of colors: ', typeof colors);
const students = ['Samuel', 'Jack', 'Ian', 'Sean'];
const numberOfStudents = students.length;
console.log('The length of students: ', numberOfStudents);
const lastIndex = numberOfStudents - 1;
const lastStudent = students[lastIndex];
console.log('The last value of students: ', lastStudent);
console.log('The type of students: ', typeof students);
