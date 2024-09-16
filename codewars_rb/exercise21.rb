=begin

# FIND THE MINE

***** P 
I: A nested arr, representing a field with a mine
O: An array containing 2 integer elements: The y position, then the x position

- Position is notated by the index
- Mine is 1, everything else is 0

***** E
 [ [0, 0, 0], [0, 0, 0], [0, 1, 0] ] 

0 0 0
0 0 0
0 1 0

Mine is in [2, 1]

***** D
- An array, for the input field
- An array, for the output location

***** A
- Find the location of the 1
  - Start with the row (y position)
    - Once found, assign to variable `row`
  - Find the column (x position)
    - assign to variable `column`
- Return the location as an array
  - [row, column]

DEF mineLocation (grid)
- INIT row
- INIT column
- ITERATE thru grid
  - If current row includes 1
    - Assign row index to row
    - ITERATE thru row
      - If 1, assign index to column
- RETURN [row, column]
END
=end

def mineLocation(grid)
  row = 0
  column = 0
  grid.each_with_index do |current_row, idx|
    if current_row.include?(1)
      row = idx
      current_row.each_with_index { |num, idx| column = idx if num == 1 }
    end
  end

  [row, column]
end

p mineLocation( [ [1, 0, 0], [0, 0, 0], [0, 0, 0] ] ) == [0, 0]
p mineLocation( [ [0, 0, 0], [0, 1, 0], [0, 0, 0] ] ) == [1, 1]
p mineLocation( [ [0, 0, 0], [0, 0, 0], [0, 1, 0] ] ) == [2, 1]
p mineLocation([ [1, 0], [0, 0] ]) == [0, 0]
p mineLocation([ [1, 0, 0], [0, 0, 0], [0, 0, 0] ]) == [0, 0]
p mineLocation([ [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 1, 0], [0, 0, 0, 0] ]) == [2, 2] 