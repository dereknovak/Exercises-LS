=begin

***** P
I: A sorted array of integers
O: An array of all the missing integers

- No specific size of return array
- if no missing integers, returns an empty array

***** E
-3, -2, 1, 5
-1, 0, 2, 3, 4

1, 2, 3, 4
[]

***** D
- Arrays for both i and o

***** A
- Initialize missing_nums array
- Iterate from left to right num
  - If num is not included in array, add to missing_nums
- Return missing_nums
=end

def missing(arr)
  missing_nums = []
  arr.first.upto(arr.last) { |num| missing_nums << num if !arr.include?(num) }
  missing_nums
end

p missing([-3, -2, 1, 5]) == [-1, 0, 2, 3, 4]
p missing([1, 2, 3, 4]) == []
p missing([1, 5]) == [2, 3, 4]
p missing([6]) == []