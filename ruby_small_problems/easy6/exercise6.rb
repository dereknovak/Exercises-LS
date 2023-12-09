=begin
************** P **************
I: 2 arrays
O: A new array, with arrays combined and duplicates deleted
>>Requirements<<
- Combine the 2 input arrays together
- New array should have all duplicates deleted
- 
>>Questions?<<
1. Will all arrays be the same size?
2. Should the output array be new?
3. How should new array be ordered?
>>Mental Model<<
Use merge and uniq
************** E **************

>>Edge Cases<<

************** D **************
Arrays, both input and output
************** A **************
DEFINE merge
- ITERATE second array
  - Push each value to first array
- RETURN first array
************** C **************
=end

def merge(arr1, arr2)
  arr2.each { |element| arr1 << element }
  arr1.uniq
end

p merge([1, 3, 5], [3, 6, 9]) == [1, 3, 5, 6, 9]