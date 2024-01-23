=begin

# ARE THEY THE SAME

***** P
I: 2 arrays
- a is first array
- b is potentially first array, with elements squared
O: A boolean
- Whether the second is the first squared

- False if
  - Not the same
  - DIfferent amount of elements
  - empty
  - nil

- Order does not matter

***** E

***** D
- Both input arrays

***** A
- Sort both arrays from small => big
- Transform array `a` to have squared elements
- Compare both to see if equal

=end

def comp(arr1, arr2)
  return false if arr1 == nil || arr2 == nil
  
  arr1, arr2 = arr1.sort, arr2.sort
  arr1.map! { |num| num**2 }
  arr1 == arr2
end

p comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]) == true
p comp([121, 144, 19, 161, 19, 144, 19, 11] , [132, 14641, 20736, 361, 25921, 361, 20736, 361]) == false
p comp(nil, [1, 2, 3]) == false
p comp([1, 2], []) == false
p comp([1, 2], [1, 4, 4]) == false 