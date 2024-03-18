=begin
***** P
I: a string
O: An integer, rep the score for the word

- words can be uppercase/lowercase
- nil can be used
- \t and \n can be used
- string can be empty

- score method

***** D
- A hash for the value/letter
  - k = value
  - v = letters (string)

***** A
- Return 0 unless the word contains letters
- Remove all non-letters from string
- Calculate the points for the string
  - Init a points var
  - Iterate thru all chars
    - Find the k/v pair that includes the character
      - downcase/find
    - Add its key to points
- Return points

=end

class Scrabble
  attr_reader :word

  SCORES = { 1 => "aeioulnrst",
             2 => "dg",
             3 => "bcmp",
             4 => "fhvwy",
             5 => "k",
             8 => "jx",
             10 => "qz" }

  def initialize(word)
    @word = word || ''
  end

  def score
    letters = word.downcase.chars.grep(/[a-z]/i)

    points = 0
    letters.each do |letter|
      value = SCORES.values.find { |v| v.include?(letter) }
      points += SCORES.key(value)
    end

    points
  end

  def self.score(word)
    Scrabble.new(word).score
  end
end
