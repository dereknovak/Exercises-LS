function newStack(stack = []) {
  return {
    push(value) {
      stack.push(value);
    },

    pop() {
      return stack.pop();
    },

    printStack() {
      stack.forEach(value => {
        console.log(value);
      });
    },
  }
}

const stack = newStack([1, 2, 3]);
stack.push(7);
stack.push(6);
stack.push(5);

const returnedValue = stack.pop();
console.log(returnedValue);
stack.push(2);

stack.printStack();