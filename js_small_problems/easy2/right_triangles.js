function triangle(height) {
  for (let count = 1; count <= height; count++) {
    let stars = '*'.repeat(count);
    let spaces = ' '.repeat(height - count);
    
    console.log(spaces + stars);
  }
}

triangle(5);
triangle(9);