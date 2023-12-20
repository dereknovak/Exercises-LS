=begin

***** P
I: A string with ()
O: A boolean, whether ( is complete with )

- A balanced string has both a ( and a matching )
  * () is acceptable, )( is not
  * If no (), it is balanced

***** E
balanced?('What (is) this?') == true
balanced?('What is) this?') == false
balanced?('What (is this?') == false
balanced?('((What) (is this))?') == true
balanced?('((What)) (is this))?') == false
balanced?('Hey!') == true
balanced?(')Hey!(') == false
balanced?('What ((is))) up(') == false
balanced?('What ())(is() up') == false

Ideas:
- regex for (........) /
- Select () and analyze
***** D
- An array containing ()

***** A
DEFINE balanced? (str)
- SPLIT str into chars and separate ()
  - Assign to parnetheses
- ANALYZE parentheses
  - 
END

=end

def balanced?(str)
  parentheses = str.chars.select { |char| char =~ /\(|\)/ }
  parentheses.each do |char|
    if char == ')'
      return false
    else
      if parentheses.any? { |char| char == ')' }
        first_occurence = parentheses.index(')')
        parentheses.delete_at(first_occurence)
      else
        return false
      end
    end
  end

  true 
end

p balanced?('What (is) this?') == true
p balanced?('What is) this?') == false
p balanced?('What (is this?') == false
p balanced?('((What) (is this))?') == true
p balanced?('((What)) (is this))?') == false
p balanced?('Hey!') == true
p balanced?(')Hey!(') == false
p balanced?('What ((is))) up(') == false
p balanced?('What ())(is() up') == false
