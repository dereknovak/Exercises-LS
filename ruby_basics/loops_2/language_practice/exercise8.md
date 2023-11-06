```Ruby
number = 0

until number == 10
  number += 1
  next if number.odd?
  puts number
end
```
On line 1, local variable `number` is initialized and references an integer object with the value `0`. On line 3, an `until` loop is employed, which continues looping until `number` is equal to `10`. Upon each iteration of the loop, `number` is incremented by `1`, the program skips to the next iteration if `number` is odd by way of the `next` command, and `number` is output by getting passed as an argument to the `puts` method invocation.

In summary, the loop will iterate on all integers from `1` through `10`, only outputting the even integers (the odd integers get skipped) on separate lines.