=begin
************** P **************
I: An integer
O: An integer
>>Requirements<<
- Find multiples of 3 and 5 between 1 and input integer
- Computer the sum of the integers
- All integers will be greater than 1
* If input is a multiple, it gets included
>>Questions?<<
1. 
2. 
3. 
>>Mental Model<<
- Create a range object from 1 - input
- Create a loop that iterates until reaching input number
- Use % to determine if its a multiple
  - Helper method
************** E **************
multisum(3) == 3
multisum(5) == 8
multisum(10) == 33
multisum(1000) == 234168
>>Edge Cases<<

************** D **************
Array containing multiples
************** A **************
DEFINE `multisum`
- CREATE array `multiples`
- Loop on range 1 thru input
  - IF number is divisble by 3 or 5
    - push into `multiples`
- SUM `multiples`
************** C **************
=end

def multiple?(num)
  num % 3 == 0 || num % 5 == 0
end

def multisum(max_integer)
  multiples = []
  (1..max_integer).each { |num| multiples << num if multiple?(num) }
  multiples.sum
end

p multisum(3) == 3
p multisum(5) == 8
p multisum(10) == 33
p multisum(1000) == 234168