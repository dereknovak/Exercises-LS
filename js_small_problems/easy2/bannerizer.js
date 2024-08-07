function logInBox(string) {
  let bannerLength = string.length + 2;

  console.log('+' + '-'.repeat(bannerLength) + '+');
  console.log('|' + ' '.repeat(bannerLength) + '|');
  console.log('| ' + string + ' |');
  console.log('|' + ' '.repeat(bannerLength) + '|');
  console.log('+' + '-'.repeat(bannerLength) + '+');
}

logInBox('To boldly go where no one has gone before.');
logInBox('');