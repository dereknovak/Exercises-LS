stoplight = ['green', 'yellow', 'red'].sample

case stoplight
when "green"
  puts "Go!"
when "yellow"
  puts "Slow down!"
when "red"
  puts "Stop!"
end

=begin
Also:

puts case stoplight
when "green" then "Go!"
when "yellow" then "Slow down!"
when "red" then "Stop!"
end 
=end