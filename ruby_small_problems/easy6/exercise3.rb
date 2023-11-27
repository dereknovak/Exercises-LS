=begin
************** P **************
I: An integer, representing the number of digits of a fib number
O: An integer, representing the index number of the first iteration of
  that multiple of digitis
>>Requirements<<
- Create a method that caluclates the fibonacci sequence
  - Starts with 1, 1, then next iteration is the sum of the previous 2
- Find the first iteration of the number of digits indicated by the input
  - 1 is 1 digit, 11 is 2 digits...
- Return the FIRST ITERATION of that number of digits
  - 1 happens on 1, 2 happens on 7, 3 on 12.....
- Argument is always >= 2
>>Questions?<<
1. 
2. 
3. 
>>Mental Model<<
- Recreate fibonacci sequence method
- Use size method
- 
************** E **************

>>Edge Cases<<

************** D **************

************** A **************
DEFINE finonacci_index_by_length (digit_size)
- INIT sequence = [1]
- INIT sum = 0
- LOOP
  - sum = sum + last element of sequence
  - push sum into sequence
  - break if last element of sequence contains input amount of digits
- RETURN the size of the sequence
************** C **************
=end

def find_fibonacci_index_by_length(digit_size)
  sequence = [1, 1]

  loop do
    sequence << sequence[-2, 2].sum
    break if sequence[-1].digits.size == digit_size
  end

  sequence.size
end

p find_fibonacci_index_by_length(2) == 7          # 1 1 2 3 5 8 13
p find_fibonacci_index_by_length(3) == 12         # 1 1 2 3 5 8 13 21 34 55 89 144
p find_fibonacci_index_by_length(10) == 45
p find_fibonacci_index_by_length(100) == 476
p find_fibonacci_index_by_length(1000) == 4782
p find_fibonacci_index_by_length(10000) == 47847