function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const obj1 = { name: 'Bob', age: 32 };
const obj2 = { book: 'Moby Dick', rating: 5 };

console.log(getProperty(obj1, 'age'));
console.log(getProperty(obj2, 'rating'));