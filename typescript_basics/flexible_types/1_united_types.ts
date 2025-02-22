// Function Overload

function wrapInArrayFO(value: string): string[];
function wrapInArrayFO(value: number): number[];
function wrapInArrayFO(value: string | number) {
  return [value];
}

// Generic

function wrapInArrayG<T extends string | number>(value: T): T[] {
  return [value];
}

// Union Types

function wrapInArrayUT(value: string | number): (string | number)[] {
  return [value];
}
// This solution could return a number array with a string input