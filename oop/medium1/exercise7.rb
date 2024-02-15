class GuessingGame  
  def initialize(low_num, high_num)
    @range = (low_num..high_num)
    @correct_num = @range.to_a.sample
    @remaining_guesses = max_guesses
  end
  
  def play
    until correct_guess? || no_more_guesses?
      display_guess_prompt
      guess_number
      display_guess_result
      decrement_remaining_guesses unless correct_guess?
    end

    display_results
  end

  private

  attr_accessor :guess, :remaining_guesses
  attr_reader :correct_num, :range

  def max_guesses
    Math.log2(@range.size).to_i + 1
  end

  def correct_guess?
    @guess == @correct_num
  end

  def no_more_guesses?
    @remaining_guesses == 0
  end

  def display_guess_prompt
    puts "You have #{@remaining_guesses} guesses remaining."
  end

  def guess_number
    loop do
      print "Enter a number between #{range.first} and #{range.last}: "
      self.guess = gets.chomp.to_i
      break if valid_guess
      print "Invalid guess. "
    end
  end

  def display_guess_result
    case guess
    when (range.first...correct_num) then too_low
    when correct_num                 then winner
    else                                  too_high
    end
  end

  def decrement_remaining_guesses
    self.remaining_guesses -= 1
  end

  def valid_guess
    @range.include?(guess)
  end

  def too_low
    puts "Your guess is too low.\n\n"
  end

  def too_high
    puts "Your guess is too high.\n\n"
  end

  def winner
    puts "That's the number!\n\n"
  end

  def display_results
    puts (no_more_guesses? ? "You have no more guesses. You lost!" : "You won!")
    puts ''
  end
end

GuessingGame.new(14, 28).play
