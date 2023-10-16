def prompt(message)
  puts "=> #{message}"
end

def get_measurement(type)
  prompt("Enter the #{type} of the room in meters:")
  distance = gets.chomp.to_f
end

def return_area(length, width)
  length * width
end

def convert_to_feet(meter)
  meter * 10.7639
end

length = get_measurement('length')
width = get_measurement('width')
area = return_area(length, width)

prompt("The area of the room is #{area} square meters (#{convert_to_feet(area)} square feet).")
