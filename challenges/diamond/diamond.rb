=begin

Class Diamond
Methods
  - self.make_diamond

- Outer tips are A
  - Move inward 1 letter at a time
- A is ord 65

***** E
A

 A
B B
 A

  A
 B B
C   C
 B B
  A

***** A
MAKE_DIAMOND(letter)
- Find distance of letter from A
  - Ascend 1 more times than that num
  - Decend that many times
- Create each row
  - Increment letter as ascend
  - Decrement letter as descend

=end
class Row
  def initialize(letter, space_out)
    @letter = letter
    @space_out = space_out
    @space_mid = determine_space
  end

  def display
    return space_out + letter + space_out if letter == 'A'
    space_out + letter + space_mid + letter + space_out
  end

  private

  attr_reader :letter

  def determine_space
    ((letter.ord - 'A'.ord) * 2) - 1
  end

  def space_out
    ' ' * @space_out
  end

  def space_mid
    ' ' * @space_mid
  end
end

class Diamond
  @@diamond = ""

  def self.make_diamond(max_letter)
    distance = max_letter.ord - 'A'.ord

    ascending_rows(distance)
    descending_rows(distance)

    @@diamond
  end

  def self.ascending_rows(distance)
    current_ord = 'A'.ord

    (distance).downto(1) do |spaces|
      @@diamond << Row.new(current_ord.chr, spaces).display + "\n"
      current_ord += 1
    end
  end

  def self.descending_rows(distance)
    current_ord = 'A'.ord + distance

    (distance + 1).times do |spaces|
      @@diamond << Row.new(current_ord.chr, spaces).display + "\n"
      current_ord -= 1
    end
  end
end

puts Diamond.make_diamond('E')
