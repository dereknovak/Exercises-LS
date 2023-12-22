=begin

***** P
I: An array to be bubble sorted
O: The SAME array, bubble sorted

- Sort the given array using the bubble sorting technique
- Continue iterating thru array until a full pass can be made without
making any changes
- Bubble sorting compares 2 values and swaps if the first is greater, then
moves onto the next element

***** E
array = [5, 3]
bubble_sort!(array)
array == [3, 5]

array = [6, 2, 7, 1, 4]
bubble_sort!(array)
array == [1, 2, 4, 6, 7]

array = %w(Sue Pete Alice Tyler Rachel Kim Bonnie)
bubble_sort!(array)
array == %w(Alice Bonnie Kim Pete Rachel Sue Tyler)

***** D
- An array containing elements to be bubble sorted. (SAME ARRAY RETURNED

***** A
DEFINE bubble_sort! (arr)
- LOOP until no changes are made
  - INIT changes = 0
  - ITERATE thru arr (destructive)
    - Compare element 1 with element 2
      - If 1 is bigger, swap.
        - Increment changes by 1
      - if smaller, next
- RETURN arr
END

=end

require 'pry'

def bubble_sort!(arr)
  changes = nil

  until changes == 0
    changes = 0
    1.upto(arr.size - 1) do |idx|
      if arr[idx - 1] > arr[idx]
        arr[idx - 1], arr[idx] = arr[idx], arr[idx - 1]
        changes += 1
      end
    end
  end
end

array = [5, 3]
bubble_sort!(array)
p array == [3, 5]

array = [6, 2, 7, 1, 4]
bubble_sort!(array)
p array == [1, 2, 4, 6, 7]
 
array = %w(Sue Pete Alice Tyler Rachel Kim Bonnie)
bubble_sort!(array)
p array == %w(Alice Bonnie Kim Pete Rachel Sue Tyler)