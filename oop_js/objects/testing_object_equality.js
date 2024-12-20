function objectsEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (!keys1.every(key => keys2.includes(key))) return false;

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}) === true);
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}) === false);
console.log(objectsEqual({a: 'foo', b: 'bar'}, {b: "bar", a: 'foo'}) === true);
console.log(objectsEqual({}, {}) === true);
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}) === false);