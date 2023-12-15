def rotate_array(arr)
  arr[1..-1] + [arr[0]]
end

def rotate_rightmost_digits(num, indicator)
  digits = num.digits.reverse
  right_nums = digits.pop(indicator)
  digits << rotate_array(right_nums)
  digits.join.to_i
end

def max_rotation(num)
  rotating_digits = num.digits.size
  rotating_digits.downto(2) { |n| num = rotate_rightmost_digits(num, n) }
  num
end

p max_rotation(735291) == 321579
p max_rotation(3) == 3
p max_rotation(35) == 53
p max_rotation(105) == 15 # the leading zero gets dropped
p max_rotation(8_703_529_146) == 7_321_609_845