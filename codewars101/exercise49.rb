=begin

# PLAYING WITH DIGITS

***** P
I: 2 integers
- Integer representing n
- Integet representing p
O: An integer, rep 'k' or -1 if not integer is possible

- second argument rep p
- 'n' will be divided into digits, then sum their exponent values together

***** E
46288, 3 => 51
4^3 + 6^4..... = 2360688 => 56288 * 51

***** D
- Array to house all of the exponents, to sum

***** A
- Divide num into digits
- transform digits into their exponent form
  - first digit is start_power
  - increment start_power by 1
- sum the digits
  - assign to digits_sum
- Times n by numbers up to half of its value until an integer is reached
- If none is reached, return -1
=end

def dig_pow(num, start_power)
  digits = num.digits.reverse
  start_power -= 1

  digits.map! do |num|
    start_power += 1
    num**start_power
  end

  digits_sum = digits.sum

  1.upto(digits_sum / 2) do |number|
    return number if num * number == digits_sum
  end

  -1
end

p dig_pow(89, 1) == 1
p dig_pow(92, 1) == -1
p dig_pow(46288, 3) == 51
p dig_pow(10383, 6) == 12933