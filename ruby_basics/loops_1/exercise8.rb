numbers = [7, 9, 13, 25, 18]

until numbers == []   # continues loop until array is empty
  puts numbers.first  # prints the first number of array
  numbers.shift       # deletes that number so next in line will print
end