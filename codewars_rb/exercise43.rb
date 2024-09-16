=begin

# TRANSFORM TO PRIME

***** P
I: An array of integers
O: An integer, rep the smallest number to add to make sum equal close prime num

- If the sum is already a prime number, then 0
- Size is as least 2 nums

***** E
- [2, 12, 8, 4, 6]
sum = 32
next prime = 37
return: 5

***** D
- Array for input nums

***** A
DEFINE minimum_number (nums)
- Find the sum of nums
- Find the next prime number
  - start at sum, then increment until a prime is found
    - Prime = % 2, 3, 5, 7 != 1
    - Assign to next_prime
- Subtract next_prime and sum
END
=end


def prime?(num)
  return num if [2, 3, 5, 7].include?(num)
  [2, 3, 5, 7].none? { |multiple| num % multiple == 0 }
end

def minimum_number(nums)
  sum = nums.sum
  next_prime = (sum..).find { |num| prime?(num) }
  next_prime - sum
end

p minimum_number([3,1,2]) == 1
p minimum_number([5,2]) == 0
p minimum_number([1,1,1]) == 0
p minimum_number([2,12,8,4,6]) == 5
p minimum_number([50,39,49,6,17,28]) == 2 