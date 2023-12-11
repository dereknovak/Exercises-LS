def count_occurrences(vehicles)
  vehicle_count = Hash.new(0)
  vehicles.each { |vehicle| vehicle_count[vehicle] += 1 }
  vehicle_count.each { |k, v| puts "#{k} => #{v}" }
end

vehicles = [
  'car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'
]

count_occurrences(vehicles)
