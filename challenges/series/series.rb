=begin
Class: Series
  Methods
  - initialize
  - slices

- Slices should return all possible consecutive numbers from a specified length
- If longer than string, throw an ArgumentError

01234 (1) => [1] [2] [3] [4] [5]
37103 (2) => [37] 71 10 03

- each cons?

***** A
SLICES

=end

class Series
  def initialize(nums)
    @nums = nums
  end

  def slices(group_size)
    raise ArgumentError if nums.size < group_size
    nums.chars.map(&:to_i).each_cons(group_size).to_a
  end

  private

  attr_reader :nums
end
