require 'minitest/autorun'
require_relative 'dna'

class TestDNA < Minitest::Test
  def setup
    @constant = DNA.new('GAGCCTACTAACGGGAT')
  end
  
  def test_standard
    new_dna = DNA.new('CATCGTAATGACGGCCT')
    distance = @constant.hamming_distance(new_dna)
    assert_equal 7, distance
  end

  def test_smaller_old
    old_dna = DNA.new('GBGCBTBB')
    distance = old_dna.hamming_distance(@constant)
    assert_equal 4, distance
  end

  def test_smaller_new
    new_dna = DNA.new('GBGCBTBB')
    distance = @constant.hamming_distance(new_dna)
    assert_equal 4, distance
  end

  def test_all_same
    new_dna = DNA.new('GAGCCTACTAACGGGAT')
    distance = @constant.hamming_distance(new_dna)
    assert_equal 0, distance
  end

  def test_all_different
    weird_dna = DNA.new('BZBZBZBZBZBZBZBZB')
    distance = @constant.hamming_distance(weird_dna)
    assert_equal 17, distance
  end

  def test_valid_strand_type
    assert_raises(TypeError) { DNA.new('') }
    assert_raises(TypeError) { DNA.new(%w(G A G C)) }
    assert_raises(TypeError) { DNA.new(1234) }
    assert_raises(TypeError) { DNA.new({ g: 'G', a: 'A' }) }
  end
end