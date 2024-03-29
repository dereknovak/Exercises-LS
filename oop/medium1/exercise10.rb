class Deck
  attr_reader :cards

  RANKS = ((2..10).to_a + %w(Jack Queen King Ace)).freeze
  SUITS = %w(Hearts Clubs Diamonds Spades).freeze
  ROYALS = { 'Jack' => 11, 'Queen' => 12, 'King' => 13, 'Ace' => 14}

  def initialize
    reset
  end

  def draw
    reset if cards.empty?
    cards.pop
  end

  private

  def reset
    @cards = RANKS.product(SUITS).map { |r, s| Card.new(r, s) }.shuffle
  end
end

class Card
  include Comparable
  attr_reader :rank, :suit

  def initialize(rank, suit)
    @rank = rank
    @suit = suit
  end

  def <=>(other)
    convert_face_card(rank) <=> convert_face_card(other.rank)
  end

  def to_s
    "#{rank} of #{suit}"
  end

  def convert_face_card(value)
    case value
    when 'Jack'  then 11
    when 'Queen' then 12
    when 'King'  then 13
    when 'Ace'   then 14
    else              value
    end
  end
end

# Include Card and Deck classes from the last two exercises.

class PokerHand
  def initialize(deck)
    @hand = (deck.is_a?(Deck) ? deck.cards : deck)
  end

  def print
    puts @hand
  end

  def evaluate
    case
    when royal_flush?     then 'Royal flush'
    when straight_flush?  then 'Straight flush'
    when four_of_a_kind?  then 'Four of a kind'
    when full_house?      then 'Full house'
    when flush?           then 'Flush'
    when straight?        then 'Straight'
    when three_of_a_kind? then 'Three of a kind'
    when two_pair?        then 'Two pair'
    when pair?            then 'Pair'
    else                       'High card'
    end
  end

  private

  def royal_flush?
    flush? && ranks.min == 10
  end

  def straight_flush?
    Deck::SUITS.any? { |suit| suits.count(suit) == 5 } &&
      straight?
  end

  def four_of_a_kind?
    Deck::RANKS.any? { |rank| ranks.count(rank) == 4 }
  end

  def full_house?
    three_of_kind = Deck::RANKS.find { |rank| ranks.count(rank) == 3 }
    return false if three_of_kind.nil?
    Deck::RANKS.any? { |rank| ranks.count(rank) == 2 unless rank == three_of_kind }
  end

  def flush?
    Deck::SUITS.any? { |suit| suits.count(suit) == 5 }
  end

  def straight?
    values = ranks.map { |rank| rank.is_a?(Integer) ? rank : Deck::ROYALS[rank] }.sort
    ranks.all? { |rank| ranks.count(rank) == 1 } &&
      values.max - values.min == 4 
  end
  
  def three_of_a_kind?
    Deck::RANKS.any? { |rank| ranks.count(rank) == 3 }
  end

  def two_pair?
    two_of_kind = Deck::RANKS.find { |rank| ranks.count(rank) == 2 }
    return false if two_of_kind.nil?
    Deck::RANKS.any? { |rank| ranks.count(rank) == 2 unless rank == two_of_kind }
  end

  def pair?
    Deck::RANKS.any? { |rank| ranks.count(rank) == 2 }
  end

  def ranks
    @hand.map(&:rank)
  end

  def suits
    @hand.map(&:suit)
  end
end

hand = PokerHand.new(Deck.new)
hand.print
puts hand.evaluate

# Danger danger danger: monkey
# patching for testing purposes.
class Array
  alias_method :draw, :pop
end

# Test that we can identify each PokerHand type.
hand = PokerHand.new([
  Card.new(10,      'Hearts'),
  Card.new('Ace',   'Hearts'),
  Card.new('Queen', 'Hearts'),
  Card.new('King',  'Hearts'),
  Card.new('Jack',  'Hearts')
])
puts hand.evaluate == 'Royal flush'

hand = PokerHand.new([
  Card.new(8,       'Clubs'),
  Card.new(9,       'Clubs'),
  Card.new('Queen', 'Clubs'),
  Card.new(10,      'Clubs'),
  Card.new('Jack',  'Clubs')
])
puts hand.evaluate == 'Straight flush'

hand = PokerHand.new([
  Card.new(3, 'Hearts'),
  Card.new(3, 'Clubs'),
  Card.new(5, 'Diamonds'),
  Card.new(3, 'Spades'),
  Card.new(3, 'Diamonds')
])
puts hand.evaluate == 'Four of a kind'

hand = PokerHand.new([
  Card.new(3, 'Hearts'),
  Card.new(3, 'Clubs'),
  Card.new(5, 'Diamonds'),
  Card.new(3, 'Spades'),
  Card.new(5, 'Hearts')
])
puts hand.evaluate == 'Full house'

hand = PokerHand.new([
  Card.new(10, 'Hearts'),
  Card.new('Ace', 'Hearts'),
  Card.new(2, 'Hearts'),
  Card.new('King', 'Hearts'),
  Card.new(3, 'Hearts')
])
puts hand.evaluate == 'Flush'

hand = PokerHand.new([
  Card.new(8,      'Clubs'),
  Card.new(9,      'Diamonds'),
  Card.new(10,     'Clubs'),
  Card.new(7,      'Hearts'),
  Card.new('Jack', 'Clubs')
])
puts hand.evaluate == 'Straight'

hand = PokerHand.new([
  Card.new('Queen', 'Clubs'),
  Card.new('King',  'Diamonds'),
  Card.new(10,      'Clubs'),
  Card.new('Ace',   'Hearts'),
  Card.new('Jack',  'Clubs')
])
puts hand.evaluate == 'Straight'

hand = PokerHand.new([
  Card.new(3, 'Hearts'),
  Card.new(3, 'Clubs'),
  Card.new(5, 'Diamonds'),
  Card.new(3, 'Spades'),
  Card.new(6, 'Diamonds')
])
puts hand.evaluate == 'Three of a kind'

hand = PokerHand.new([
  Card.new(9, 'Hearts'),
  Card.new(9, 'Clubs'),
  Card.new(5, 'Diamonds'),
  Card.new(8, 'Spades'),
  Card.new(5, 'Hearts')
])
puts hand.evaluate == 'Two pair'

hand = PokerHand.new([
  Card.new(2, 'Hearts'),
  Card.new(9, 'Clubs'),
  Card.new(5, 'Diamonds'),
  Card.new(9, 'Spades'),
  Card.new(3, 'Diamonds')
])
puts hand.evaluate == 'Pair'

hand = PokerHand.new([
  Card.new(2,      'Hearts'),
  Card.new('King', 'Clubs'),
  Card.new(5,      'Diamonds'),
  Card.new(9,      'Spades'),
  Card.new(3,      'Diamonds')
])
puts hand.evaluate == 'High card'