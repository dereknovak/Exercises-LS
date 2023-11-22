def string_to_signed_integer(integer_str)
  integer_hash = { '0' => 0, '1' => 1, '2' => 2, '3' => 3, '4' => 4,
                   '5' => 5, '6' => 6, '7' => 7, '8' => 8, '9' => 9 }
  sum = 0
  multiplier = 1

  integer_str.reverse.each_char do |char|
    if char == '-'
      sum *= -1
    elsif integer_hash.include?(char)
      sum += integer_hash[char] * multiplier
      multiplier *= 10
    end
  end

  sum
end

p string_to_signed_integer('4321') == 4321
p string_to_signed_integer('-570') == -570
p string_to_signed_integer('+100') == 100

