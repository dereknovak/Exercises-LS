class Deck
  attr_reader :cards

  RANKS = ((2..10).to_a + %w(Jack Queen King Ace)).freeze
  SUITS = %w(Hearts Clubs Diamonds Spades).freeze

  def initialize
    shuffle_cards
  end

  def draw
    shuffle_cards if cards.empty?
    cards.pop
  end

  private

  def shuffle_cards
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

  protected

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

deck = Deck.new
drawn = []
52.times { drawn << deck.draw }
p drawn.count { |card| card.rank == 5 } == 4
p drawn.count { |card| card.suit == 'Hearts' } == 13

drawn2 = []
52.times { drawn2 << deck.draw }
p drawn != drawn2 # Almost always.
