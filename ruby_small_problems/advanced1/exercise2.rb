=begin

***** P
I: An integer, rep the height of the star
O: A star (string image)

***** E
star(7)

*  *  * No spaces, 2 spaces
 * * *  1 space, 1 space
  ***   2 spaces, No spaces
*******
  ***
 * * *
*  *  *

***** A
- Init outer_space to 0
- Init inner_space to (num / 2) - 1
- Loop num amount of times
  - If iteration < half of num
    - outer_space + star + inner_space + star + inner_space + star
    - outer_space + 1
    - inner_space -1
  - If iteration == half of num
    - star * num
  - If iteration == half of num + 1
    - outer_space + star + inner_space + star + inner_space + star
  - else
    - outer_space + star + inner_space + star + inner_space + star
=end

def star(num)
  outer_space = 0
  inner_space = (num / 2) - 1

  num.times do |i|
    if i == num / 2
      puts '*' * num
    else
      puts "#{' ' * outer_space}*#{' ' * inner_space}*#{' ' * inner_space}*"
      next if i == (num / 2) - 1
      
      if i < num / 2
        outer_space += 1
        inner_space -= 1
      else
        outer_space -= 1
        inner_space += 1
      end
    end
  end
end

star(5)