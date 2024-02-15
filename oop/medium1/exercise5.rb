class MinilangError < StandardError; end
class InvalidToken < MinilangError; end
class EmptyStackError < MinilangError; end

class Minilang
  ACTIONS = %w(PUSH ADD SUB MULT DIV MOD POP PRINT)

  def initialize(string)
    @commands = string.split
    @register = 0
    @stack = []
  end

  def eval
    @commands.each do |token|
      raise InvalidToken, "Invalid token: #{token}" unless valid_token(token)
      case token
      when 'PUSH'  then push
      when 'ADD'   then add
      when 'SUB'   then sub
      when 'MULT'  then mult
      when 'DIV'   then div
      when 'MOD'   then mod
      when 'POP'   then pop
      when 'PRINT' then puts @register
      else              @register = token.to_i
      end
    end

    rescue MinilangError => error
      puts error
  end

  private

  def push
    @stack << @register
  end
  
  def pop
    raise EmptyStackError, "Empty stack!" if @stack.empty?
    @register = @stack.pop
  end

  def add
    @register += pop
  end

  def sub
    @register -= pop
  end

  def mult
    @register *= pop
  end

  def div
    @register /= pop
  end

  def mod
    @register %= pop
  end

  def print
    puts @register
  end

  def valid_token(token)
    ACTIONS.include?(token) ||
    token =~ /\A[-+]?\d+\z/
  end
end


Minilang.new('PRINT').eval
# 0

Minilang.new('5 PUSH 3 MULT PRINT').eval
# 15

Minilang.new('5 PRINT PUSH 3 PRINT ADD PRINT').eval
# 5
# 3
# 8

Minilang.new('5 PUSH 10 PRINT POP PRINT').eval
# 10
# 5

Minilang.new('5 PUSH POP POP PRINT').eval
# Empty stack!

Minilang.new('3 PUSH PUSH 7 DIV MULT PRINT ').eval
# 6

Minilang.new('4 PUSH PUSH 7 MOD MULT PRINT ').eval
# 12

Minilang.new('-3 PUSH 5 XSUB PRINT').eval
# Invalid token: XSUB

Minilang.new('-3 PUSH 5 SUB PRINT').eval
# 8

Minilang.new('6 PUSH').eval
# (nothing printed; no PRINT commands)