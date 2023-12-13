=begin
****** P
I: 2 integer inputs, representing a range of integers
- num 1 is starting
- num 2 is ending
O: Either num, Fizz, Buzz, or FizzBuzz

- Divisible by 3 = Fizz
- Divisible by 5 = Buzz
- 3 and 5 = FizzBuzz

****** E
fizzbuzz(1, 15) # -> 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz

****** D
- Array, containing all numbers within the range

****** A
DEF fizzbuzz (start_num, end_num)
- Create array using start_num and end_num
- Check whether each integer in array follows conditions:
  - Divisible by 3
    - Output Fizz
  - Divisible by 5
    - Output Buzz
  - Divisible by both 3 and 5
   - Output FizzBuzz
  - Otherwise
    - num

=end

def divisible_by_3(num)
  num % 3 == 0
end

def divisible_by_5(num)
  num % 5 == 0
end

def fizzbuzz_value(num)
  if divisible_by_3(num) && divisible_by_5(num)
    'FizzBuzz'
  elsif divisible_by_3(num)
    'Fizz'
  elsif divisible_by_5(num)
    'Buzz'
  else
    num
  end
end

def fizzbuzz(start_num, end_num)
  result = []
  start_num.upto(end_num) { |num| result << fizzbuzz_value(num) }
  puts result.join(', ')
end

fizzbuzz(1, 15) # -> 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz