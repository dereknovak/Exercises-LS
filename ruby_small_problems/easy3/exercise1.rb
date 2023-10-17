=begin
*** P ***
I: 6 inputs from user
O: String: "The number ___ appears/does not appear in [ARRAY]"
>>Requirements:
Write a program
Push numbers to an array
Check if 6th number is included in first 5 numbers
IF true then appears
IF false then does not appear
*Use string interpolation
>>Questions?
1. Do I have to follow the exact prompt syntax?
2. Do I need to validate the input?
3. 
>>Mental Model
Define a method `get_number`
Upon each prompt, push the inputted number into a defined array
On the sixth prompt, do not push number into array
Check if that number is included in the array
Print the corresponding string message
*** E ***
==> Enter the 1st number:
25
==> Enter the 2nd number:
15
==> Enter the 3rd number:
20
==> Enter the 4th number:
17
==> Enter the 5th number:
23
==> Enter the last number:
17
The number 17 appears in [25, 15, 20, 17, 23].


==> Enter the 1st number:
25
==> Enter the 2nd number:
15
==> Enter the 3rd number:
20
==> Enter the 4th number:
17
==> Enter the 5th number:
23
==> Enter the last number:
18
The number 18 does not appear in [25, 15, 20, 17, 23].
>>Edge Cases
- 
*** D ***
- Array
*** A ***
INITIALIZE array
DEFINE `get_number` (array)
  prompt message
  get number
  IF array size == 5
    check if number is in array
    IF yes
      'appears'
    ELSE
      'does not appear'
  ELSE
    push number to array

*** C ***
=end

# Methods

def get_number(iteration)
  puts "==> Enter the #{iteration} number:"
  number = gets.chomp.to_i
end

def display_result(array, number)
  if array.include?(number)
    puts "The number #{number} appears in #{array}."
  else
    puts "The number #{number} does not appear in #{array}."
  end
end

# Program Start

order = %w(1st 2nd 3rd 4th 5th)
given_numbers = []

5.times { |i| given_numbers << get_number(order[i])}
checking_number = get_number('last')
display_result(given_numbers, checking_number)
