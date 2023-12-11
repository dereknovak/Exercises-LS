=begin
************** P **************
I: An array of integers
O: An integer, representing the sum of sums of each leading subsequence
>>Requirements<<
- Find sum for each leading subsequence
  - [a, b, c] => (a a+b a+b+c).sum
- Arrays will always contain at least 1 num

>>Questions?<<
1. 
2. 
3. 
>>Mental Model<<

************** E **************

>>Edge Cases<<

************** D **************
- An array, for input integers
************** A **************
DEF sum_of_sums (arr)
- INIT sums
- INIT range
- loop thru arr
  - push element 1 with range 1 into sums
  - increment range by 1
  - terminate when range is equal to arr size
    1. 3
    2. 3, 3/5
    3. 3, 3/5, 3/5/2
- Flatten sums and return its sum
************** C **************
=end

def sum_of_sums(arr)
  sums = []
  range = 1

  until range > arr.size
    sums << arr[0, range]
    range += 1
  end

  sums.flatten.sum
end

p sum_of_sums([3, 5, 2]) == (3) + (3 + 5) + (3 + 5 + 2) # -> (21)
p sum_of_sums([1, 5, 7, 3]) == (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) # -> (36)
p sum_of_sums([4]) == 4
p sum_of_sums([1, 2, 3, 4, 5]) == 35