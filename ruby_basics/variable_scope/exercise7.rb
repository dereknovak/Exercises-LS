a = 7
array = [1, 2, 3]

array.each do |element|
  a = element
end

put a

# 3
# Each time a loops through the block, 'a = element' asigns it to
# the next integer in the array. 3 is the final integer, so that's
# what remains.