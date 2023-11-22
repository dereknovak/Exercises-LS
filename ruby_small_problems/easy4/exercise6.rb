=begin
************** P **************
I: An array of integers
O: A new array of integers
>>Requirements<<
- Return a new array of integers with same number of elements as input
  - 3 input, 3 output
- Each element should be the new running total
  - Running total is sum of elements up to that point
  - [1, 2, 3] would be [1, 3 (1+2), 6 (1+2+3)]
* If input is an empty array, output will also be empty
>>Questions?<<
1. 
2. 
3. 
>>Mental Model<<
- Iterate through array
  - Use `sum` method within each iteration
************** E **************
running_total([2, 5, 13]) == [2, 7, 20]
running_total([14, 11, 7, 15, 20]) == [14, 25, 32, 47, 67]
running_total([3]) == [3]
running_total([]) == []
>>Edge Cases<<

************** D **************
Arrays of integers
************** A **************
DEFINE running_total (input_integers)
- CREATE new_integers
- CREATE sum
- Iterate through input_integers
  - push sum of current integer and sum to new_integers
- RETURN new_integers
************** C **************
=end

def running_total(input_integers)
  sum = 0
  input_integers.map { |num| sum += num }
end

p running_total([2, 5, 13]) == [2, 7, 20]
p running_total([14, 11, 7, 15, 20]) == [14, 25, 32, 47, 67]
p running_total([3]) == [3]
p running_total([]) == []