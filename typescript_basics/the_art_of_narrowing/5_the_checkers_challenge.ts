interface Circle {
  kind: 'circle';
  radius: number;
}

interface Square {
  kind: 'square';
  sideLength: number;
}

type Shape = Circle | Square;

function assertNever(val: never): void {
  throw new Error('Shape does not exist');
}

function getArea(shape: Shape): number | void {
  try {
    switch (shape.kind) {
      case 'circle':
        return Math.PI * (shape.radius ** 2);
      case 'square':
        return shape.sideLength ** 2;
      default:
        return assertNever(shape);
    }
  } catch(e) {
    if (e instanceof Error) console.log(e.message);
    throw e;
  }
}

console.log(getArea({ kind: 'circle', radius: 3 }));        // 28.27
console.log(getArea({ kind: 'square', sideLength: 3 }));    // 9
console.log(getArea({ kind: 'triangle', sideLength: 3 }));  // TSError