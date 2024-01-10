=begin

# SUM OF DIGITS / DIGITAL ROOT

***** P
I: An integer
O: An single integer

- Keep performing the loop until a single number is produced
- A recursive method should be used

***** E
- 493193
- 4 + 9 + 3 + 1 + 9 + 3 = 29
- 2 + 9 = 11
- 1 + 1 = 2

***** D
- An array for the digits to sum

***** A
DEFINE digital_root (num)
- RETURN the number if it is a single digit
- CALL digital_root method on the sum of current digits
END

=end

def digital_root(num)
  num.digits.size == 1 ? num : digital_root(num.digits.sum)
end

p digital_root(16) == 7
p digital_root(942) == 6
p digital_root(132189) == 6
p digital_root(493193) == 2
p digital_root(123456789) == 9