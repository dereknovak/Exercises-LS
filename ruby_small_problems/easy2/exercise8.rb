# Methods

def prompt(message)
  puts ">> #{message}"
end

def get_integer
  prompt("Please enter an integer greater than 0")
  integer = gets.chomp.to_i
end

def get_operation
  prompt("Enter 's' to compute the sum, 'p' to compute the product")
  operation = gets.chomp.downcase

  case operation
  when 's' then 'sum'
  when 'p' then 'product'
  end
end

def calculate_sum(integer)
  sum = 0
  (1..integer).each { |num| sum += num }
  sum
end

def calculate_product(integer)
  product = 1
  (1..integer).each { |num| product *= num }
  product
end

# Program Start

integer = get_integer
operation = get_operation

result = case operation
         when 'sum' then calculate_sum(integer)
         when 'product' then calculate_product(integer)
         end

puts "The #{operation} of the integers between 1 and #{integer} is #{result}."