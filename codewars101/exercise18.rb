=begin

PERSISTENT BUGGER

***** P
I: An integer
O: An integer, rep the number of times it takes to multiple until a single dig

- Each iteration divides num into digits, then multiplies them all together
  - 29 => 2*9 = 18 => 1*8 = 8

***** E
p persistence(39) == 3
p persistence(4) == 0
p persistence(25) == 2
p persistence(999) == 4 

***** D
- An array, for each string of digits

***** A
DEFINE persistence (num)
- INIT iterations to 0
- LOOP
  - split num into digits
  - BREAK when digits size is 1
  - multiply digits together
    - reassign num to the product
  - increment iterations by 1
- RETURN iterations
END

=end

def persistence(num)
  (0..).each do |i|
    digits = num.digits
    return i if digits.size == 1
    num = digits.reduce(:*)
  end
end

p persistence(39) == 3
p persistence(4) == 0
p persistence(25) == 2
p persistence(999) == 4 