```Ruby
greeting = 'Hello!'

greeting.gsub!('Hello!', 'Goodbye!')
puts greeting
```
On line 1, local variable `greeting` is initialized and references a string object with the value `'Hello!'`. On line 3, the destructive `gsub!` method is called on `greeting` and gets passed `'Hello', 'Goodbye'` as its arguments. `gsub!` will mutate the caller by substituting the first argument `'Hello'` within `greeting` with the second argument `'Goodbye!'`, resulting in the mutated string object `'Goobye!'`. `greeting` is then passed as an argument to the `puts` method invocation, which outputs `Goodbye!` to the console.

This example demonstrates how destructive methods change the object on which they are invoked, rather than returning a new object. Had the non-destructive `gsub` method have been used instead, `greeting` would have continued to reference `'Hello!'` as line 4 would return a new object.