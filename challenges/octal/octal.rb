=begin

***** P
Methods:
- to_decimal
- initialize

I: A string, rep an integer
O: An integer, rep the octal version of input

Octal
  - Rightmost is multiplied 8**0
  - Next is 8**1
  - Next is 8**2
  - Etc
  - Sum all the digitis

***** E
233
3 => 3 * 8**0 = 3
3 => 3 * 8**1 = 24
3 => 2 * 8**2 = 128
Sum = 155
***** D

***** A
- Separate num into digits, reversed
- Iterate thru each num
  - Init a octal_nums array for each digit
  - For each digit, multiply by 8**n
  - use index to keep track of n
- Sum and return the octal_nums

=end

class Octal
  def initialize(num)
    @num = num
  end

  def to_decimal
    digits = num.to_i.digits
    return 0 if digits.any? { |dig| dig > 7 } || num =~ /[a-z]/i

    octal = 0
    digits.each_with_index do |dig, idx|
      octal += (dig * (8**idx))
    end

    octal
  end

  private

  attr_reader :num
end
