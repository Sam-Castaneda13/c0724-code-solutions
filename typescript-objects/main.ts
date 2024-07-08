interface StudentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  preciousOccupation?: string;
}

const student: StudentProps = {
  firstName: 'Samuel',
  lastName: 'Castaneda',
  age: 21,
};

const fullName: string = student.firstName + ' ' + student.lastName;

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

interface Vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
}

const vehicle: Vehicle = {
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

interface Pet {
  name?: string;
  kind?: string;
}

const pet: Pet = {
  name: 'Luna',
  kind: 'Dog',
};

delete pet.name;
delete pet['kind'];

console.log('The value of pet is:', pet);
console.log('The type of Pet is: ', typeof pet);
