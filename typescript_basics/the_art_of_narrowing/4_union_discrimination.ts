interface Circle {
  kind: 'circle';
  radius: number;
}

interface Square {
  kind: 'square';
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * (shape.radius ** 2);
    default:
      return shape.sideLength ** 2;
  }
}

console.log(getArea({ kind: 'circle', radius: 3 }));        // 28.27
console.log(getArea({ kind: 'square', sideLength: 3 }));    // 9