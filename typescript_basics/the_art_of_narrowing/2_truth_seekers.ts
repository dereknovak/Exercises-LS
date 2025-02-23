function isStringArray(array: unknown[]): array is string[] {
  return array.every(val => typeof val === 'string');
}

console.log(isStringArray([1, 2, 3]));
console.log(isStringArray(['test', 'string']));