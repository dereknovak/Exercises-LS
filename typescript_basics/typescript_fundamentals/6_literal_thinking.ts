type Direction = 'left' | 'right' | 'up' | 'down';
let move: Direction = 'right';

/* 
If we attempt to assign `move` to any string aside from those included in 
`Direction`, TypeScript would throw an error, as `move` is defined with a
literal union type. Anything outside the strings within the union type are
not assignable to anything with a `Direction` typing.
*/