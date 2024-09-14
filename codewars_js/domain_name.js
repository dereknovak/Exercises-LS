/* 

PROBLEM
I: A string, representing a url
O: A string, representing just the domain of the url

- Domain name
    - follows either // or spot where www goes
    - http://something.domain.com
    - http://domain.com

- This really comes down to regex

ALGORITHM
1. Remove first part of url
2. Return whatever is left up to the dot

*/

function domainName(url) {
  let secondPart = url.replace(/(https?:\/\/)?(www.)*/, '');
  return secondPart.match(/[a-z]+/ig)[0];
}

// TEST CASES

console.log(domainName("http://google.com") === 'google');
console.log(domainName("http://google.co.jp") === 'google');
console.log(domainName("www.xakep.ru") === 'xakep');
console.log(domainName("https://youtube.com") === 'youtube');