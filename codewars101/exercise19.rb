# TITLE CASE

def title_case(str, exceptions='')
  exceptions = exceptions.split.map(&:downcase)
  new_str = str.split.each_with_object([]) do |word, result|
              if exceptions.include?(word.downcase)
                result << word.downcase
              else
                result << word.capitalize
              end
            end

  new_str[0].capitalize!
  new_str.join(' ')
end

p title_case('a clash of KINGS', 'a an the of') == 'A Clash of Kings'
p title_case('THE WIND IN THE WILLOWS', 'The In') == 'The Wind in the Willows'
p title_case('the quick brown fox') == 'The Quick Brown Fox' 