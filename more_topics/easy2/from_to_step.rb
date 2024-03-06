=begin

***** P
I: 3 integers
- Starting value
- Ending value
- Step value
- Accept a block
O:
- Something from the given block, determined by the user

- Should not iterate on a range

***** E
step(1, 10, 3) { |value| puts value + 2 }
  - 3
  - 6
  - 9
  - 12

***** D
- None

***** A
- Loop until start_num is greater to end_num
  - Each loop should increment start num by the step
  - Yield to the block, passing in start_num as arg

=end

def step(start_num, end_num, step)
  current_num = start_num

  until current_num > end_num
    yield(current_num)
    current_num += step
  end

  current_num
end


step(1, 10, 3) { |value| puts "value = #{value}" }
puts ''
step(1, 10, 3) { |value| puts value + 2 }