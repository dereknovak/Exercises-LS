=begin
************** P **************
I: An array of integers from 0-19
O: An array of integers, sorted from a-z by english spelling
>>Requirements<<
- Sort integers based on their english spelling, from a-z (eight..zero)
>>Questions?<<
1. Am I returning the same array?
2. 
3. 
>>Mental Model<<
- Create an hash of english spelling
- Use sort_by, and sort by values
************** E **************
alphabetic_number_sort((0..19).to_a) == [
  8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17,
  6, 16, 10, 13, 3, 12, 2, 0
]
>>Edge Cases<<

************** D **************
- A hash containing number with english spelling { 0 => 'zero' }
************** A **************
DEFINE alphabetic_number_sort (integers)
- Sort integers using ENGLISH_INTEGERS
  - sort_by the value of integer key

************** C **************
=end

ENGLISH_INTEGERS = %w(zero one two three four five six seven eight
                      nine ten eleven twelve thirteen fourteen fifteen
                      sixteen seventeen eighteen nineteen)

def alphabetic_number_sort(integers)
  integers.sort_by { |num| ENGLISH_INTEGERS[num] }
end

p alphabetic_number_sort((0..19).to_a) == [
  8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17,
  6, 16, 10, 13, 3, 12, 2, 0
]