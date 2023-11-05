```Ruby
numbers = []

loop do
  puts 'Enter any number:'
  input = gets.chomp.to_i
  
  numbers << input
  break if numbers.size == 5
end

puts numbers
```
On line 1, local variable `numbers` is initialized and references an empty array.

On line 3, the `loop` method is invoked and gets passed a `do...end` block (lines 3-9) as an argument. Upon each iteration of the block, the `puts` method is invoked, prompting the user `Enter any number:`. The program receives an integer input from the user, which gets assigned to local variable `input` and is immediately pushed into `numbers` using the destructive `<<` method. The program checks whether `numbers` contains `5` elements and terminates the loop if the condition is met using the `break` command.

Lastly, `numbers` is passed as an argument to the `puts` method invocataion, which outputs all of its elements, in sequence, on separate lines.