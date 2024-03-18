=begin

I: A list of potential anagrams
O: A list of all the correct anagrams

class Anagram
method: match
  - takes an array as an argument
  - returns an array of all the anagrams

Rules:
- Case insensitive, but return the correct case

***** A
- sort detector string alphabetically
- compare string with the anagrams list
  - select only the anagrams that are correct
    - downcase each one
    - check if it matches the detector
- return the selection

=end

class Anagram
  def initialize(str)
    @detector = str
  end

  def match(list)
    list.select do |word|
      anagram?(word)
    end
  end

  private

  def anagram?(str)
    str.downcase.chars.sort.join == @detector.downcase.chars.sort.join &&
      str.downcase != @detector.downcase
  end
end
