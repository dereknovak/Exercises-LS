=begin

***** P
Methods used:
- classify

I: An integer
O: a string, rep if its deficient, perfect, or abundant

Aliquot sum
- Sum of all the factors

deficient
- aliquot sum is less than num

perfect
- aliquot sum is equal to num

abundant
- aliquot sum is greater than num

***** E
15 => 1, 3, 5 = 9 < 15 deficient
6 => 1, 2, 3, => 6 perfect
24 => 1, 2, 3, 4, 6, 8, 12 = 36 abundant

***** D

***** A
- Find the factors of the given num
- Sum the factors
- Compare sum to given num
=end

class PerfectNumber
  def self.classify(num)
    raise StandardError if num < 0

    aliquot = determine_aliquot(num)
    if aliquot > num
      "abundant"
    elsif aliquot == num
      "perfect"
    else
      "deficient"
    end
  end

  def self.determine_aliquot(num)
    factors = []
    (1..(num / 2)).each do |factor|
      factors << factor if num % factor == 0
    end

    factors.sum
  end

  private_class_method :determine_aliquot
end
