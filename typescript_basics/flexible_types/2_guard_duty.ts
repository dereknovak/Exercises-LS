function printId(id: string | number): void {
  if (typeof id === 'string') {
    console.log('Your ID is a string');
  } else {
    console.log('Your ID is a number');
  }
}