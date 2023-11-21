```Ruby
state = 'tExAs'

state.capitalize!
puts state
```
On line 1, local variable `state` is initialized and references a string object with the value `'tExAs'`. On line 3, the destructive `capitalize!` method is called on `state`, which mutates the caller by setting the first character to uppercase and the rest to lower. `state` is then passed as an argument to the `puts` method invocation on line 4, outputting `Texas` to the console.

Because `capitalize!` is a destructive method, the object referenced by `state` is permanently altered; therefore, its value will remain `'Texas'` both before and after `puts` is invoked.