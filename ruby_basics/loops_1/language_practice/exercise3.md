```Ruby
iterations = 1

loop do
  puts "Number of iterations = #{iterations}"
  iterations += 1
  break if iterations > 5
end
```

On line 1, local variable `iterations` is initialized and references an integer object with the value `1`. On line 3, the looping `loop` method is invoked and passes a `do...end` block as an argument. Upon each iteration of the block, the current value of `iterations` is output within a string using string interpolation, that value is then incremented by 1, and then gets checks whether it is greater than `5`. If the value becomes greater than `5`, the loop is terminated using the `break` command. `iterations` will increment 5 times before exceeding the value of `5`; therefore, the code will output 5 strings on separate lines containing each interpolated value of `iterations`.