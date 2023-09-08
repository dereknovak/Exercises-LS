numbers = []
count = 0

while count < 5
  numbers << rand(100)
  puts numbers.last
  count += 1
end