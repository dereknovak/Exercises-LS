=begin

***** P
I: An array of integers
O: An integer, representing the number of pairs in array

- A pair is 2 occurrences of the same integer
  - Don't have to be next to each other
  - Can be multiple pairs (four 2s is two pairs)
* Array can be empty, which will return 0

***** E
p pairs([1, 2, 5, 6, 5, 2]) == 2
p pairs([1, 2, 2, 20, 6, 20, 2, 6, 2]) == 4
p pairs([0, 0, 0, 0, 0, 0, 0]) == 3 
p pairs([1000, 1000]) == 1
p pairs([]) == 0
p pairs([54]) == 0

***** D
- An array (input)

***** A
DEFINE pairs(numbers)
- INIT pairs to 0
- ITERATE thru unique numbers
  - Count number of times number appears in numbers
  - Divide that number by 2, then add number to pairs
- RETURN pairs
END

=end

def pairs(nums)
  pairs = 0
  nums.uniq.each { |num| pairs += (nums.count(num) / 2) }
  pairs
end

p pairs([1, 2, 5, 6, 5, 2]) == 2
p pairs([1, 2, 2, 20, 6, 20, 2, 6, 2]) == 4
p pairs([0, 0, 0, 0, 0, 0, 0]) == 3 
p pairs([1000, 1000]) == 1
p pairs([]) == 0
p pairs([54]) == 0