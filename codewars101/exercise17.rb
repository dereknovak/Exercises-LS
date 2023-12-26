# WRITE NUMBER IN EXPANDED FORM

def expanded_form(num)
  counter = 1
  expanded = num.digits.each_with_object([]) do |dig, arr|
               arr << dig * counter unless dig == 0
               counter *= 10
             end

  expanded.reverse.join(' + ')
end

p expanded_form(12) == '10 + 2'
p expanded_form(42) == '40 + 2'
p expanded_form(70304) == '70000 + 300 + 4' 
