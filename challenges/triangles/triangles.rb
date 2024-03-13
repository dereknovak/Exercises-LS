class TriangleError < StandardError; end

class Triangle
  attr_reader :type

  def initialize(s1, s2, s3)
    @s1, @s2, @s3 = [s1, s2, s3].sort
    validate_triangle
    @type = determine_type
  end

  private

  def determine_type
    if equilateral?
      @type = 'equilateral'
    elsif isosceles?
      @type = 'isosceles'
    elsif scalene?
      @type = 'scalene'
    end
  end

  def validate_triangle
    if [@s1, @s2, @s3].any? { |length| length <= 0 }
      raise TriangleError, "Side less than or equal to 0."
    elsif ((@s1 + @s2) <= @s3)
      raise TriangleError, "Sum of sides #{@s1} and #{@s2} not greater than #{@s3}."
    end
  end

  def equilateral?
    [@s1, @s2, @s3].uniq.size == 1
  end

  def isosceles?
    [@s1, @s2, @s3].uniq.size == 2
  end

  def scalene?
    [@s1, @s2, @s3].uniq.size == 3
  end
end
