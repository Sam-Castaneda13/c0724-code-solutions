'use strict';
const student = {
  firstName: 'Samuel',
  lastName: 'Castaneda',
  age: 21,
};
const fullName = student.firstName + ' ' + student.lastName;
console.log('The value of full name is: ', fullName);
student.livesInIrvine = false;
student.preciousOccupation = 'Cashier';
console.log('Value of student.livesInIrvine: ', student.livesInIrvine);
console.log(
  'Value of student.previousOccupation: ',
  student.preciousOccupation
);
console.log(student);
console.log('Type of student variable: ', typeof student);
const vehicle = {
  make: 'Porsche',
  model: '914',
  year: 1978,
};
vehicle['color'] = 'Yellow';
vehicle['isConvertible'] = true;
console.log('Value of vehicle.color: ', vehicle.color);
console.log('Value of vehicle.isConvertible: ', vehicle.isConvertible);
console.log('class:', vehicle);
console.log('Type of for Vehicle: ', typeof vehicle);
const pet = {
  name: 'Luna',
  kind: 'Dog',
};
delete pet.name;
delete pet['kind'];
console.log('The value of pet is:', pet);
console.log('The type of Pet is: ', typeof pet);
