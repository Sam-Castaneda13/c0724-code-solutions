'use strict';
const business = {
  opens: '11:00 AM',
  closes: '9:00 PM',
  totalEmployees: 4,
  daysOpen: ['T', 'W', 'Th', 'F'],
  employees: {
    Jack: { position: 'server', daysOfWeekWorking: ['T', 'W', 'Th'] },
    Sean: { position: 'Manager', daysOfWeekWorking: ['T', 'W', 'F'] },
    Ian: { position: 'Chief', daysOfWeekWorking: ['T', 'W', 'Th', 'F'] },
  },
};
console.log(business.employees.Jack);
function addWeekends() {
  business.daysOpen.push('Sa');
  business.daysOpen.push('Su');
}
