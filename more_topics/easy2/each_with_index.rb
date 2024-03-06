def each_with_index(arr)
  arr.size.times { |idx| yield(arr[idx], idx) }
  arr
end

result = each_with_index([1, 3, 6]) do |value, index|
  puts "#{index} -> #{value**index}"
end

puts result == [1, 3, 6]