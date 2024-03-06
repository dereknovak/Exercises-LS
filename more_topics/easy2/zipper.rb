def zip(arr1, arr2)
  zipped = []
  arr1.size.times { |idx| zipped << [arr1[idx], arr2[idx]] }
  zipped
end

p zip([1, 2, 3], [4, 5, 6]) == [[1, 4], [2, 5], [3, 6]]