var person = {
  firstName: 'Steve',
  lastName: 'Martin',
  hobby: 'Banjo Playing'
};
console.log('firstName:', person.firstName, 'lastName:', person.lastName,
  'hobby:', person.hobby);

var fullname = person.firstName + ' ' + person.lastName + '.';
console.log("The person's name is:", fullname);

person.job = 'Jerk';
console.log("The person's current job is: " + person.job + '.');

person.previousJob = 'amigo';
console.log("The person's previous job is:" + person.previousJob + '.');

console.log('The complete person object:', person);
