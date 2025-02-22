function firstElement<T>(array: T[]): T | number {
  return array[0];
}

console.log(firstElement([7, 9, 11]));
console.log(firstElement([]));