def palindromic_number?(num)
  new_num = num.to_s.reverse.to_i
  num == new_num
end

puts palindromic_number?(34543) == true
puts palindromic_number?(123210) == false
puts palindromic_number?(22) == true
puts palindromic_number?(5) == true