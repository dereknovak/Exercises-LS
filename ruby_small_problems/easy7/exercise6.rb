def staggered_case(str, starting_case = 'upper')
  staggered_str = ''
  counter = 0
  counter = 1 if starting_case == 'lower'

  str.each_char do |char|
    staggered_str << char.upcase if counter.even?
    staggered_str << char.downcase if counter.odd?
    counter += 1 unless char =~ /[^A-Za-z]/
  end

  staggered_str
end

p staggered_case('I Love Launch School!') == 'I lOvE lAuNcH sChOoL!'
p staggered_case('ALL CAPS') == 'AlL cApS'
p staggered_case('ignore 77 the 444 numbers') == 'IgNoRe 77 ThE 444 nUmBeRs'