function printLength(val: string | string[]): void {
  console.log(
    (typeof val === 'string' ? 'String length: ' : 'Array count: ') +
    String(val.length)
  );
}

printLength('hello');
printLength(['hello', 'world']);