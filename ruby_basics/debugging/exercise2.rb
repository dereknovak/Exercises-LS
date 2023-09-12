def predict_weather
  sunshine = [true, false].sample
  if sunshine
    puts "Today's weather will be sunny!"
  else
    puts "Today's weather will be cloudy!"
  end
end

=begin

Both strings 'true' and 'false' are considered 'truthy' in Ruby's eyes.
The creator most likely intended booleans, which should be written without
any quotation marks.

=end