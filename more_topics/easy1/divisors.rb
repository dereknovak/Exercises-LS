=begin

***** P
I: An integer
O: An array of integers, rep the divisors for the input integer

- A divisor is an integer that can be equally divided into the integer

***** E
7 => 1, 7
12 => 1, 2, 3, 4, 6, 12

***** D
- A range of nums
- An array for the output

***** A
- Create results array
- Determine the range on numbers from 1 to input
  - iterate thru range
    - If num is a divisor, add to results
- Return the results
=end

def divisors(num)
  (1..(num / 2)).to_a.select { |n| num % n == 0 } << num
end

p divisors(1) == [1]
p divisors(7) == [1, 7]
p divisors(12) == [1, 2, 3, 4, 6, 12]
p divisors(98) == [1, 2, 7, 14, 49, 98]
p divisors(99400891) == [1, 9967, 9973, 99400891] # may take a minute