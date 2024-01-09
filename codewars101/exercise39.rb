=begin

# LARGEST PRODUCT IN A SERIES

***** P
I: A string, rep a series of integers
O: An integer, rep the largest product of a series of 5

- There will always be at least 5 integers
- Result should be the product, not the series of nums

***** A
- INIT possible_nums
- LOOP
  - Repeat loop size - 4
    - 5 nums equals 1 time
    - 6 nums equals 2 times
  - Isolate a range of 5 nums
    - find the product of those 5 nums
    - PUSH to possible nums
- RETURN the max of possible_nums
=end

def greatest_product(nums)
  possible_nums = []

  (nums.length - 4).times do |idx|
    possible_nums << nums[idx, 5].chars.map(&:to_i).reduce(:*)    
  end

  possible_nums.max
end

p greatest_product("123834539327238239583") == 3240
p greatest_product("395831238345393272382") == 3240
p greatest_product("92494737828244222221111111532909999") == 5292
p greatest_product("92494737828244222221111111532909999") == 5292
p greatest_product("02494037820244202221011110532909999") == 0 