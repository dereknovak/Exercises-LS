def fibonacci(n)
  seq = [1, 1]
  3.upto(n) { seq << seq.last(2).sum }
  seq.last
end

p fibonacci(20) == 6765
p fibonacci(100) == 354224848179261915075
p fibonacci(100_001) # => 4202692702.....8285979669707537501