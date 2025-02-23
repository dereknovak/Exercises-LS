interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
}

const bob: Employee = {
  employeeId: 23,
  name: 'Bob',
  age: 42,
};