=begin

# MEAN SQUARE ERROR

***** P
I: 2 inputs
- An integer arr
- An integer arr
O: An integer or float

- Mean square
  - absolute value of each element, squared, then avverage all integers
- returns an int if no remainder. A float otherwise
- Input arrs will always be the same length

***** E
[1, 2, 3] , [4, 5, 6]
4-1 = 3**2 = 9
5-2 = 3**2 = 9
6-3 = 3**2 = 9
9 + 9 + 9 = 27 / 3 = 9

***** D
- Arrays for both inputs
- Array for the totals, before dividing

***** A
- Zip elements together
- TRANSFORM each subarr to create abs value squared
- SUM the elements, then divide by the length (float)
=end

def solution(nums1, nums2)
  nums1.zip(nums2).map { |nums| nums.reduce(:-)**2 }.sum / nums1.size.to_f
end

p solution([1, 2, 3], [4, 5, 6]) == 9
p solution([10, 20, 10, 2], [10, 25, 5, -2]) == 16.5
p solution([-1, 0], [0, -1]) == 1 