colors = 'blue pink yellow orange'

puts colors.include?('yellow')
puts colors.include?('purple')

colors2 = 'blue boredom yellow'

puts colors2.include?('red')   # This will print 'true' because the substring
                               # 'red' is in 'blue boREDom yellow'
