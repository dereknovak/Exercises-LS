def get_quote(person)
  if person == 'Yoda'
    'Do. Or do not. There is not try.'

  elsif person == 'Confucius'
    'I hear and I forget. I see and I remember. I do and I understand.'

  else person =='Einstein'
    'Do not worry about your difficulities in Mathematics. I can assure you mine are still greater.'

  end
end

puts 'Confucius says:'
puts '""' + get_quote('Confucius') + '""'

=begin

The original code used 3 separate 'if' statements, closed with 'end'. Because
each were separate, it ran through each and returned the last one's result,
which is 'nil' for 'Confucius'.

Instead, these should be consolidated into 1 'if' statement so that the 
argument can run through all options at the same time and execute accordingly.

=end