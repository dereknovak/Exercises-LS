def find_even_index(arr)
  arr.size.times { |idx| return idx if arr[0, idx].sum == arr[(idx + 1)..-1].sum }
  -1
end