puts "Teddy is #{rand(20..200)} years old!"

# Further Exploration

def valid_name?(name)
  /^[a-zA-Z\s]+$/.match?(name)
end

def get_name
  puts "=> Enter a name:"

  loop do
    name = gets.chomp
    if valid_name?(name) || name.empty?
      name = 'Teddy' if name.empty?
      return name.capitalize
    else
      puts "=> That's not a name!"
    end
  end
end

name = get_name
age = rand(20..200)

puts "#{name} is #{age} years old!"
