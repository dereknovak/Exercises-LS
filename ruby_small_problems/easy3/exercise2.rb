=begin
************** P **************
I: 2 integers from user
O: addition, subtractions, product, quotient, remainder, and power of numbers
>>Requirements<<
Write a program
Use all the operations listed in 'output'
Do not worry about validation
>>Questions?<<
1. 
2. 
3. 
>>Mental Model<<

************** E **************
==> Enter the first number:
23
==> Enter the second number:
17
==> 23 + 17 = 40
==> 23 - 17 = 6
==> 23 * 17 = 391
==> 23 / 17 = 1
==> 23 % 17 = 6
==> 23 ** 17 = 141050039560662968926103
>>Edge Cases<<

************** D **************

************** A **************
DEFINE prompt


************** C **************
=end

def prompt(message)
  puts "==> #{message}"
end

def get_number(iteration)
  prompt("Enter the #{iteration} number:")
  number = gets.chomp.to_i
end

def display_calculations(num1, num2)
  prompt("#{num1} + #{num2} = #{num1 + num2}")
  prompt("#{num1} - #{num2} = #{num1 - num2}")
  prompt("#{num1} * #{num2} = #{num1 * num2}")
  prompt("#{num1} / #{num2} = #{num1.to_f / num2}")
  prompt("#{num1} % #{num2} = #{num1 % num2}")
  prompt("#{num1} ** #{num2} = #{num1**num2}")
end

num1 = get_number('first')
num2 = get_number('second')
display_calculations(num1, num2)

