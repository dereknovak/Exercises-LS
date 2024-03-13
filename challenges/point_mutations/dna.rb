=begin

***** P
I: 2 strings, consisting of DNA strands (letters) and the mutated one
O: An integer, rep the hamming distance

- Hamming Distance
  - Total number of DNA changes
- If length of strands is different, only account for the smaller one.

***** E

GAGCCTACTAACGGGAT
CATCGTAATGACGGCCT
^ ^ ^  ^ ^    ^^
-7 changes... Hamming Distance is 7

***** D
- Comparing strings

***** A
- Sort the strings by size (find the smaller string)
- Initialize distance to 0
- Loop the size of the smaller string
  - Each iteration, compare the strand
    - If same, move on
    - If different, increment distance
- Return the distance
=end

class DNA
  def initialize(strand)
    @strand = strand
    validate_strand
  end

  def hamming_distance(other)
    strands = [strand, other.strand].sort_by(&:size)
    
    distance = 0
    strands.first.size.times do |idx|
      distance += 1 unless strand[idx] == other.strand[idx]
    end

    distance
  end

  protected

  attr_reader :strand

  private

  def validate_strand
    if !@strand.is_a?(String) || @strand.empty?
      raise TypeError, "must use string as argument"
    end
  end
end
