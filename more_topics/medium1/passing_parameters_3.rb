items = ['apples', 'corn', 'cabbage', 'wheat']

def gather(items)
  puts "Let's start gathering food."
  yield(items)
  puts "We've finished gathering!"
end

# 1
gather(items) do |*produce, wheat|
  puts produce.join(', ')
  puts wheat
end

puts ''

# 2
gather(items) do |apples, *veggies, wheat|
  puts apples
  puts veggies.join(', ')
  puts wheat
end

puts ''

# 3
gather(items) do |apples, *others|
  puts apples
  puts others.join(', ')
end

puts ''

# 4
gather(items) do |apples, corn, cabbage, wheat|
  puts "#{apples}, #{corn}, #{cabbage}, and #{wheat}"
end
