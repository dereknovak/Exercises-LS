```Ruby
numbers = []

while numbers.size < 5
  numbers << rand(100)
end

puts numbers
```
On line 1, local variable `numbers` is initialized and references an empty array. On line 3, a `while` loop is employed, which continues looping while the number of elements within `numbers` array is less than `5`. Upon each loop iteration, a random integer between 0-99, inclusively, is pushed to the `numbers` array, via calling the destructive `<<` method. Once the number of elements referenced by `numbers` reaches 5, the loop is terminated and `numbers` gets passed as an argument to the `puts` method invocation, outputting each element, in sequence, on separate lines.