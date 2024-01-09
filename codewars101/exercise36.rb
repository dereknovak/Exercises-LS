=begin

# DELETE A DIGIT

***** P
I: An integer between 10 and 10000000
O: An integer, representing the largest integer possible with on digit removed

***** E
152:
- 52 <=
- 12
- 15

***** D
- An array for when the digits get split apart

***** A
- INIT possible_nums
- LOOP using index
  - Split integer into digits
  - Delete the index
  - Rejoin the digits
    - PUSH to possible_nums
- RETURN the max integer
=end

def delete_digit(num)
  possible_nums = []

  num.digits.size.times do |idx|
    digits = num.digits.reverse
    digits.delete_at(idx)
    possible_nums << digits.join.to_i
  end

  possible_nums.max
end

p delete_digit(152) == 52
p delete_digit(1001) == 101
p delete_digit(10) == 1 