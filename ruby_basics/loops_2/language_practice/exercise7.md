```Ruby
5.times do |index|
  puts index
  break if index == 2
end
```
On line 1, the `times` method is called on the integer `5` and gets passed a `do...end` block as an argument. This will iterate the block `5` times, binding each iteration number, starting at zero, to the block's parameter `index`. Upon each iteration of the block, block local variable `index` is output by the `puts` method invocation, and then checks whether `index` references the integer `2`. If the condition is met, the block will be prematurely terminated.

In summary, the block will only iterate 3 times, outputting `0`, `1`, and `2` on separate lines, as the third iteration begins on index `2`.