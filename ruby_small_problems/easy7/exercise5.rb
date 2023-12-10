def staggered_case(str, starting_case = 'upper')
  staggered_str = ''
  counter = 0
  counter = 1 if starting_case == 'lower'

  str.each_char do |char|
    staggered_str << char.upcase if counter.even?
    staggered_str << char.downcase if counter.odd?
    counter += 1
  end

  staggered_str
end

p staggered_case('I Love Launch School!', 'lower') == 'I LoVe lAuNcH ScHoOl!'
p staggered_case('ALL_CAPS', 'lower') == 'AlL_CaPs'
p staggered_case('ignore 77 the 444 numbers', 'lower') == 'IgNoRe 77 ThE 444 NuMbErS'