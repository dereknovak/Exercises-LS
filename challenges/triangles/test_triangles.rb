require 'minitest/autorun'
require_relative 'triangles'

class TriangleTest < Minitest::Test
  def test_valid_triangle
    assert_raises(TriangleError) { Triangle.new(3, 2, -1) }
  end
  
  def test_equilateral
    triangle = Triangle.new(2, 2, 2)
    assert_equal 'equilateral', triangle.type
  end

  def test_isosceles
    triangle1 = Triangle.new(2, 2, 1)
    triangle2 = Triangle.new(2, 1, 2)
    triangle3 = Triangle.new(1, 2, 2)

    assert_equal 'isosceles', triangle1.type
    assert_equal 'isosceles', triangle2.type
    assert_equal 'isosceles', triangle3.type
  end

  def test_scalene
    triangle1 = Triangle.new(3, 2, 1)
    triangle2 = Triangle.new(3, 1, 2)
    triangle3 = Triangle.new(2, 3, 1)
    triangle4 = Triangle.new(1, 2, 3)
    triangle5 = Triangle.new(1, 3, 2)
    triangle6 = Triangle.new(2, 1, 3)

    assert_equal 'scalene', triangle1.type
    assert_equal 'scalene', triangle2.type
    assert_equal 'scalene', triangle3.type
    assert_equal 'scalene', triangle4.type
    assert_equal 'scalene', triangle5.type
    assert_equal 'scalene', triangle6.type
  end
end