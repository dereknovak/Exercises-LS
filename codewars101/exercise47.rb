=begin

# ARRAY DIFF

***** P
I: 1. An array of integers
   2. An array of integers
O: The first array of integers, with all integers from the 2nd array removed

- Subtract the integers from the second array with the first array
- If no integers present in first array, no integers will be returned
- If no integers present in second array, no integers will be removed

***** E
- [1, 2, 2] , [2]
2 is removed from the first array
RETURNED [1]

***** D
- An array to house both input arrays

***** A
DEFINE array_diff (nums, nums_to_remove)
- ITERATE thru the nums_to_remove
  - Delete each num from nums
- RETURN nums
END
=end

def array_diff(nums, nums_to_remove)
  nums.reject { |num| nums_to_remove.include?(num) }
end

p array_diff([1,2], [1]) == [2]
p array_diff([1,2,2], [1]) == [2,2]
p array_diff([1,2,2], [2]) == [1]
p array_diff([1,2,2], []) == [1,2,2]
p array_diff([], [1,2]) == [] 