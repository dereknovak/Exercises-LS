```Ruby
number_a = 0
number_b = 0

loop do
  number_a += rand(2)
  number_b += rand(2)
  next unless number_a == 5 || number_b == 5
  puts "5 was reached!"
  break
end
```
On lines 1 and 2, local variables `number_a` and `number_b` are initialized and reference an integer object with the value `0`.

On line 4, the `loop` method is invoked and gets passed a `do...end` block (lines 4-10) as an argument. Upon each iteration of the block, `number_a` and `number_b` are randomly incremented by `0` or `1`, then checking if either variable reference is equal to `5`. If neither are, the `next` command is employed and the remaining expressions are skipped; however, once either value becomes `5`, the program outputs `5 was reached!` by invocation of the `puts` method, and the loop is terminated with the `break` command.