def multiply_all_pairs(arr1, arr2)
  products = []
  arr1.each { |num1| arr2.each { |num2| products << num1 * num2 } }
  products.sort
end

def multiply_all_pairs2(arr1, arr2)
  arr1.product(arr2).map { |nums| nums.reduce(:*) }.sort
end

p multiply_all_pairs2([2, 4], [4, 3, 1, 2]) == [2, 4, 4, 6, 8, 8, 12, 16]