```Ruby
def count_sheep
  5.times do |sheep|
    puts sheep
  end
  10
end

puts count_sheep
```
The code will output `0`, `1`, `2`, `3`, `4`, and `10`, in sequence and on separate lines.

On line 8, the defined method `count_sheep` is invoked. Within the method, the `times` method is called on the integer `5` and gets passed a `do...end` block as an argument. The `times` method will iterate the block `5` times, with each iteration number, starting at iteration `0`, binding to the block's parameter `sheep`. Upon each iteration of the block, `sheep` gets passed as an argument to the `puts` method invocation, outputting its value to the console. Because `sheep` references each iteration number and the block iterates `5` times, the integers `0` through `4` are output.

The last line of the method simply includes the integer `10`; therefore, `10` is returned from the method and output by invocation of the `puts` method on line 8.