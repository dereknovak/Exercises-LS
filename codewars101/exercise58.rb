=begin

# TRIPLE TROUBLE

***** P
I: 2 integers to compare
O: 1 if a triple/double, 0 if not

- A triple has 3 nums in a row
- A double has 2 nums in a row
- Valid if the double and triple are the same nums

***** E
666789 - 12345667 => 1
666          66

***** D

***** A
- Convert nums to digits
- Find the triple digit in num1
  - If not, return 0 **************
  - Initialize current_num
  - initialize counter1 to 0
  - Iterate thru num1
    - If num == current_num
      - increment counter1 by 1
      - if counter1 == 3
        - break
    - else
      - current_num = num
      - counter = 0

- See if num2 has a double of that number
  - Initial counter2 to 0
  - Iterate thru num2
    - If num2 == current_num
      - counter2 += 1
      - return 1 if counter2 == 2
    - else
      - counter2 = 0
=end

def triple_double(num1, num2)
  current_num = 0
  counter1 = 0
  number_found = false

  num1.digits.reverse.each do |num|
    if num == current_num
      counter1 += 1
      if counter1 == 2
        number_found = true
      end
    else
      current_num = num unless number_found == true
      counter1 = 0
    end
  end

  counter2 = 0
  num2.digits.reverse.each do |num|
    if num == current_num
      counter2 += 1
      return 1 if counter2 == 2
    else
      counter2 = 0
    end
  end

  0
end

p triple_double(12345, 12345) == 0
p triple_double(666789, 12345667) == 1 