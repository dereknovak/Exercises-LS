```Ruby
pets = ['cat', 'dog', 'fish', 'lizard']

my_pet = pets[2]
puts "I have a pet #{my_pet}!"
```
On line 1, local variable `pets` is initialized and references an array object containing the elements `['cat', 'dog', 'fish', 'lizard']`. On line 3, the `[]` method is called on `pets` and gets passed the integer `2` as an argument, returning the third element of the caller (`'fish'`) and assigning it to the initialized local variable `my_pet`. On line 4, `my_pet` is then interpolated into the string `"I have a pet #{my_pet}!"`, which gets passed as an argument to the `puts` method invocation, outputing `I have a pet fish!` to the console.

It's important to note that array indexing begins at index 0, which is why `pets[2]` references the third element.