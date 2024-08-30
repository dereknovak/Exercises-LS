function swapName(name) {
  let [firstName, lastName] = name.split(' ');
  return [lastName, firstName].join(', ');
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"