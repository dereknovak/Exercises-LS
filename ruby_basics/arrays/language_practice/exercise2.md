```Ruby
pets = ['cat', 'dog', 'fish', 'lizard']

my_pets = pets[2, 2]
puts "I have a pet #{my_pets[0]} and a pet #{my_pets[1]}!"
```
On line 1, local variable `pets` is initialized and references an array objects containing the elements `['cat', 'dog', 'fish', 'lizard']`. On line 3, the `[]` method is called on `pets` and gets passed the integers `2, 2` as its arguments, which returns a range of `2` elements starting at the caller's index value `2`. In this case, because `'fish'` is the third element and `'lizard'` is within the range, these two elements are returned from the method as the array `['fish', 'lizard']` and are assigned to the initialized local variable `my_pets`.

On line 4, the two elements of `my_array` are interpolated into the string object `"I have a pet #{my_pets[0]} and a pet #{my_pets[1]}!"`, with `#{my_pets[0]}` receiving the first element (`'fish'`) and `#{my_pets[1]}` receiving the second element (`'lizard'`). The new string is then passed as an argument to the `puts` method invocation, which outputs `I have a pet fish and a pet lizard!` to the console.

It's important to note that array indexing begins at index 0, which is why index `1` references the second element in the array.