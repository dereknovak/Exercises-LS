```Ruby
loop do
  number = rand(100)
  puts number
  break if number <= 10
end
```
On line 1, the `loop` method is invoked and gets passed a `do...end` block (lines 1-5) as an argument. Upon each iteration of the block, a random integer between 0-100, exclusively, is assigned to the local variable `number`, that integer is output by getting passed as an argument to the `puts` method invocation, and a `break if` command is employed that terminates the loop if `number` is less than or equal to `10`.

In summary, the loop will continue outputting random integers on separate lines until the last integer output is equal or between `0` and `10`.