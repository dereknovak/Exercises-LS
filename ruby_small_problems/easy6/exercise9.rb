=begin
************** P **************
I: 2 inputs
- An array of elements
- An object, representing what the method will check for inclusion.
O: A boolean, representing if it includes the element or not
>>Requirements<<
- CANNOT use include?
- Not just integers
- 
>>Questions?<<
1. 
2. 
3. 
>>Mental Model<<

************** E **************
include?([1,2,3,4,5], 3) == true
include?([1,2,3,4,5], 6) == false
include?([], 3) == false
include?([nil], nil) == true
include?([], nil) == false
>>Edge Cases<<

************** D **************
- An array, representing a set of elements to be checked.
************** A **************
DEFINE include? (arr, included_element)
- ITERATE thru arr (any?)
  - Check if element is equal to include_element

************** C **************
=end

def include?(arr, search_value)
  arr.any? { |element| element == search_value }
end

p include?([1,2,3,4,5], 3) == true
p include?([1,2,3,4,5], 6) == false
p include?([], 3) == false
p include?([nil], nil) == true
p include?([], nil) == false