def swapcase(str)
  swapped_str = ''
  str.each_char do |char|
    if ('a'..'z').include?(char)
      swapped_str << char.upcase
    elsif ('A'..'Z').include?(char)
      swapped_str << char.downcase
    else
      swapped_str << char
    end
  end

  swapped_str
end

p swapcase('CamelCase') == 'cAMELcASE'
p swapcase('Tonight on XYZ-TV') == 'tONIGHT ON xyz-tv'