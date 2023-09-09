number = 0

until number == 10
  number += 1
  puts number if number.even? # only prints if number is even, otherwise skips
end