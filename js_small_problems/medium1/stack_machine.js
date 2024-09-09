/* 

PROBLEM
I: A string of tokens
O: Log numbers to console based on tokens

- 2 parts:
    - A stack, which contains an array of numeric values
    - A register, with 1 numeric value

Tokens:
    - n
        - Places its value into register
    - PUSH
        - Places register value onto stack and register remains the same
    - ADD
        - Removes value from top of stack and adds to register
    - SUB
        - Removes value from top of stack and substracts it from register
    - MULT
        - Removes value from top of stack and multiplies it to register
    - DIV
        - Removes value from top of stack and divides it from register, storing the *integer* quotient in register
    - REMAINDER
        - Removes value from top of stack and finds remainder from register, storing the *integer* remainder
    - POP
        - Removes topmost value from stack and places in register
    - PRINT
        - Prints register's value to console.

- All arguments will be valid (will not try to remove a non-existent element
- When register is empty, its value is 0

EXAMPLE
5 PRINT PUSH 3 PRINT ADD PRINT
- Stack: [] Register: 5
- Prints 5 to console
- Stack: [5] Register: 5
- Stack: [5] Register: 3
- Prints 3 to console
- Stack: [] Register: 8
- Prints 8 to console

DATA STRUCTURE
- An array of all tokens
- Will require a switch statement

ALGORITHM
1. Split string into an array of tokens
    - split
2. Initialize a stack array
3. Initialize a register variable to 0
4. Iterate through the tokens and complete appropriate action
    - Use switch statement
*/

function minilang(string) {
  const tokens = string.split(' ');
  const stack = [];
  let register = 0;

  tokens.forEach(token => {
    switch (token) {
      case 'PUSH':
        stack.push(register);
        break;
      case 'ADD':
        register += stack.pop();
        break;
      case 'SUB':
        register -= stack.pop();
        break;
      case 'MULT':
        register *= stack.pop();
        break;
      case 'DIV':
        register = Math.floor(register / stack.pop());
        break;
      case 'REMAINDER':
        register = Math.floor(register % stack.pop());
        break;
      case 'POP':
        register = stack.pop();
        break;
      case 'PRINT':
        console.log(register);
        break;
      default:
        register = parseInt(token, 10);
    }
  });
}


// TEST CASES

minilang('PRINT');
// 0
console.log('');

minilang('5 PUSH 3 MULT PRINT');
// 15
console.log('');

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8
console.log('');

minilang('5 PUSH POP PRINT');
// 5
console.log('');

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7
console.log('');

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6
console.log('');
minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12
console.log('');

minilang('-3 PUSH 5 SUB PRINT');
// 8
console.log('');

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)