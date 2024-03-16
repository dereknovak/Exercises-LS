=begin

I: Modern decimal number
O: Roman numeral equivalent (str)

I, V, X, L, C, D, M

I = 1
V = 5
X = 10
L = 50
C = 100
D = 500
M = 1000

Don't need to convert anything above 3000

***** A
- Init roman hash
- Init roman_numeral str
- Divide num into digits
- Iterate thru each num
  - Find size of digits
  - If

- Determine roman numeral to digit conversion
  - Use array of letters
- Convert digit to roman numeral
  - Idx is based on size of num
    - size 1, start at idx 1
    -size 2, start at idx 
  - Iterate thru each digit
  - Case
    - 1..3
      - num times the conversion
    - 4
      - both conversions 
    - 5..8
      - first conversion, then times the conversion
    - 9
      - previous conversion and one

- Return the roman numeral representation

=end

class RomanNumeral
  LETTERS = %w(nil M D C L X V I)
  
  def initialize(value)
    @value = value
  end

  def to_roman
    digits = @value.digits.reverse
    idx = determine_starting_idx(digits.size)
    roman_numerals = ''

    digits.each do |digit|
      case digit
      when 1..3 then roman_numerals << LETTERS[idx] * digit
      when 4    then roman_numerals << LETTERS[idx] + LETTERS[idx - 1]
      when 5..8 then roman_numerals << LETTERS[idx - 1] + (LETTERS[idx] * (digit - 5))
      when 9    then roman_numerals << LETTERS[idx] + LETTERS[idx - 2]
      end

      idx += 2
    end

    roman_numerals
  end

  private

  def determine_starting_idx(size)
    case size
    when 1 then 7
    when 2 then 5
    when 3 then 3 
    when 4 then 1
    end
  end
end


