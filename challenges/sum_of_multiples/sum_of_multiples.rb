=begin

***** P
Methods
- to (class method)

I: 2 possible
- set of nums for instance (list of multiples)
- a maximum num
O: The sum of all mulitples

if no multiples are established, default to 3/5

***** E
10 => 3, 5, 6, 9 = 23
20 (7, 13, 17) => 7, 13, 14, 17 = 51
***** D
- An array for the input list
***** A
2 METHODS

to
- Establish list as an array
- Find all the multiples below given num
  - Establish a range of nums
  - Select only the nums that have a multiple

- Sum the multiples

self.to
- Instantiate a new SumOfMultiples using 3 and 5
- call the `to` method on it

=end

class SumOfMultiples
  def initialize(*list)
    @list = list
  end

  def to(max_num)
    multiples = (1...max_num).to_a.select do |num|
      @list.any? { |mult| num % mult == 0 }
    end

    multiples.sum
  end

  def self.to(max_num)
    SumOfMultiples.new(3, 5).to(max_num)
  end
end
