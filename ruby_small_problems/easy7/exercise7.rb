=begin
************** P **************
I: An array of integers
O: A string "The result is..."
>>Requirements<<

>>Questions?<<
1. 
2. 
3. 
>>Mental Model<<

************** E **************

>>Edge Cases<<

************** D **************

************** A **************

************** C **************
=end

def show_multiplicative_average(numbers)
  "The result is #{format("%.3f", (numbers.reduce(:*) / numbers.size.to_f))}."
end

p show_multiplicative_average([3, 5])                # => The result is 7.500
p show_multiplicative_average([6])                   # => The result is 6.000
p show_multiplicative_average([2, 5, 7, 11, 13, 17]) # => The result is 28361.667