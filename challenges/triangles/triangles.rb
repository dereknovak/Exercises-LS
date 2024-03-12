class TriangleError < StandardError; end

class Triangle
  attr_reader :type

  def initialize(s1, s2, s3)
    @s1, @s2, @s3 = [s1, s2, s3].sort
    @type = determine_type
  end

  private

  def determine_type
    if [@s1, @s2, @s3].any? { |length| length <= 0 }
      raise TriangleError, "Invalid triangle"
    elsif equilateral?
      @type = 'equilateral'
    elsif isosceles?
      @type = 'isosceles'
    elsif scalene?
      @type = 'scalene'
    else
      raise TriangleError, "Invalid Triangle"
    end
  end

  def equilateral?
    [@s1, @s2, @s3].uniq == [@s1]
  end

  def isosceles?
    (@s1 == @s2) ||
      (@s1 == @s3) ||
      (@s2 == @s3)
  end

  def scalene?
    [@s1, @s2, @s3].uniq == [@s1, @s2, @s3]
  end
end