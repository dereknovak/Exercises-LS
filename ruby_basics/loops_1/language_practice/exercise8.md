```Ruby
numbers = [7, 9, 13, 25, 18]

until numbers.empty?
  puts numbers.shift
end
```
On line 1, local variable `numbers` is initialized and references an array of integers, containing the elements `[7, 9, 13, 25, 18]`. On line 3, an `until` loop is employed, which continues looping until `numbers` references an empty array. Within each loop iteration, the destructive `shift` method is called on `numbers`, which removes and returns the first element of the array. This returned element is then passed as an argument to the `puts` method invocation, outputting it to the console.

In summary, the loop iterates 5 times, with each iteration removing and outputting the first element of `numbers`, resulting in `7`, `9`, `13`, `25`, and `18` being output, in sequence, on separate lines.