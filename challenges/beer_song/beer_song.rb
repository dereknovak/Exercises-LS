=begin
Methods
- verse
- lyrics

I: 2 possible
- 1 num, just that verse
- 2 nums, range of verses, from 1st to 2nd
O: The verse(s) in string format

- Lyrics  method goes from 99-0
  - Use verse method

***** A

=end

class BeerSong
  def self.verse(num)
    case num
    when 2
      "#{num} bottles of beer on the wall, #{num} bottles of beer.\n" \
      "Take one down and pass it around, #{num - 1} bottle of beer on the wall.\n"
    when 1
      "#{num} bottle of beer on the wall, #{num} bottle of beer.\n" \
      "Take it down and pass it around, no more bottles of beer on the wall.\n"
    when 0
      "No more bottles of beer on the wall, no more bottles of beer.\n" \
      "Go to the store and buy some more, 99 bottles of beer on the wall.\n"
    else
      "#{num} bottles of beer on the wall, #{num} bottles of beer.\n" \
      "Take one down and pass it around, #{num - 1} bottles of beer on the wall.\n"
    end
  end

  def self.verses(verse, final_verse)
    song = ""
    verse.downto(final_verse) do |num|
      song << verse(num)
      song << "\n" unless num == final_verse
    end

    song
  end

  def self.lyrics
    verses(99, 0)
  end

  def 
end
