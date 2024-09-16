=begin

TAKE A TEN MINUTE WALK

***** P
I: An array of strings, each rep a cardinal direction
O: A boolean, rep if you make it back to your starting point or not

- Each direction takes you 1 block, and each block takes 1 minutes
  - Can only take ten minutes, no more, no less
  - must arrive at same point, or false

IDEAS:
track N/S with +-
track W/E with +-
track time with counter

***** E
p is_valid_walk(['n','s','n','s','n','s','n','s','n','s']) == true
p is_valid_walk(['w','e','w','e','w','e','w','e','w','e','w','e']) == false
p is_valid_walk(['w']) == false
p is_valid_walk(['n','n','n','s','n','s','n','s','n','s']) == false 

***** D
- An array containing all of the directions

***** A
DEFINE valid_walk(directions)
- INIT north_south
- INIT west_east
- INIT minutes
- ITERATE thru directions
  - n + 1, s - 1
  - w + 1, e - 1
  - increment minutes by 1
- north_south, west_east == 0 AND minutes == 10
END

=end

def is_valid_walk(walk)
  x = 0
  y = 0
  mins = 0

  walk.each do |cardinal|
    case cardinal
    when 'n' then y += 1
    when 's' then y -= 1
    when 'w' then x += 1
    when 'e' then x -= 1
    end

    mins += 1
  end

  x == 0 && y == 0 && mins == 10
end

p is_valid_walk(['n','s','n','s','n','s','n','s','n','s']) == true
p is_valid_walk(['w','e','w','e','w','e','w','e','w','e','w','e']) == false
p is_valid_walk(['w']) == false
p is_valid_walk(['n','n','n','s','n','s','n','s','n','s']) == false

