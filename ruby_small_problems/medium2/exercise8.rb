=begin

***** P
I: An integer, representing a starting value
O: An integer, representing the 'featured' number higher and closest to value

- Featured number?
  - Odd
  - Multiple of 7
  - Each digit occurs only once.
- Return an Error if there are no numbers
  - Anything above 9,999,999,999

IDEAS:
- split number into digits
- validate featured number

***** E
featured(12) == 21
featured(20) == 21
featured(21) == 35
featured(997) == 1029
featured(1029) == 1043
featured(999_999) == 1_023_547
featured(999_999_987) == 1_023_456_987

featured(9_999_999_999) # -> There is no possible number that fulfills those requirements

***** D
- An array to keep track of digits

***** A
DEFINE valid_featured? (num)
- num is odd
- num divisible by 7
- digits in num are unique
END

DEFINE featured (num)
- LOOP
  - until num is a valid featured num
  - increment num by 1
- RETURN num
END

=end

def valid_featured?(num)
  num.odd? && num % 7 == 0 && num.digits == num.digits.uniq
end

def featured(num)
  num += 1

  until valid_featured?(num)
    num += 1
    if num.digits.size > 10
      return "There is no possible number that fulfills those requirements"
    end
  end

  num
end

p featured(12) == 21
p featured(20) == 21
p featured(21) == 35
p featured(997) == 1029
p featured(1029) == 1043
p featured(999_999) == 1_023_547
p featured(999_999_987) == 1_023_456_987
p featured(9_999_999_999) # -> There is no possible number that fulfills those requirements