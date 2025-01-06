/* 

PROBLEM
I: The object to delegate to
I: The method to delegate
I*: Any arguments that need to be passed to method
O: None, just delegate

- Delegate should maintain the reference, not return a new function

NOTES
- pass in the object
- Use dot notation of 2nd input on passed in function to 

*/

function delegate(obj, method, ...args) {
  return function() {
    obj[method].apply(obj, args);
  }
}

const foo = {
  name: 'test',
  bar(greeting) {
    console.log(`${greeting} ${this.name}`);
  },
};

const baz = {
  qux: delegate(foo, 'bar', 'hello'),
};

baz.qux();   // logs 'hello test';

foo.bar = () => { console.log('changed'); };

baz.qux();          // logs 'changed'