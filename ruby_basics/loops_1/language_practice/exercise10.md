```Ruby
friends = ['Sarah', 'John', 'Hannah', 'Dave']

for name in friends
  puts "Hello, #{name}!"
end
```
On line 1, local variable `friends` is initialized and references an array of strings, containing the elements `['Sarah', 'John', 'Hannah', 'Dave']`. On line 3, a `for` loop is employed, iterating through `friends` by assigning each element to the variable `name`. Within each iteration, `name` gets interpolated into the string `"Hello, #{name}"` and passed as an argument to the `puts` method invocation, outputting it to the console.

In summary, the loop iterates through each element of `friends`, outputting a result such as `Hello, Sarah!` and so on until all elements have been used.