# Methods

def get_age
  puts "What is your age?"
  age = gets.chomp.to_i
end

def get_retire_age
  puts "At what age would you like to retire?"
  retire_age = gets.chomp.to_i
end

def calculate_work_remaining(age, retire_age)
  retire_age - age  
end

def calculate_retire_year(current_year, work_remaining)
  current_year + work_remaining
end

# Program Start

current_year = Time.new.year

age = get_age
retire_age = get_retire_age
work_remaining = calculate_work_remaining(age, retire_age)
retire_year = calculate_retire_year(current_year, work_remaining)

puts "It's #{current_year}. You will retire in #{retire_year}."
puts "You have only #{work_remaining} years of work to go!"
