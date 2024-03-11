require 'minitest/autorun'
# require 'minitest/reporters'

# Minitest::Reporters.use!

require_relative 'cash_register'
require_relative 'transaction'

class CashRegisterTest < Minitest::Test
  def setup
    @transaction = Transaction.new(100)
    @register = CashRegister.new(1000)
  end

  def test_accept_money
    assert_equal(1000, @register.total_money)

    @transaction.amount_paid = 100
    new_total = @register.accept_money(@transaction)
    assert_equal(1100, new_total)
  end

  def test_change
    @transaction.amount_paid = 110
    @register.accept_money(@transaction)

    change = @register.change(@transaction)
    assert_equal(10, change)
  end

  def test_give_receipt
    @transaction.amount_paid = 100
    assert_output("You've paid $#{@transaction.amount_paid}.\n") do
      @register.give_receipt(@transaction)
    end
  end

  def test_prompt_for_payment
    input = StringIO.new("100\n")
    output = StringIO.new
    @transaction.prompt_for_payment(input: input, output: output)

    assert_equal 100, @transaction.amount_paid
  end
end