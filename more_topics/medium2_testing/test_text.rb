require 'minitest/autorun'
require_relative 'text'

class TextTest < Minitest::Test
  def setup
    @sample_text = File.open('sample_text.txt', 'r')
  end

  def test_swap
    text = Text.new(@sample_text.read)

    result = text.swap('a', 'e')
    expected = <<~TEXT.chomp
    Lorem ipsum dolor sit emet, consectetur edipiscing elit. Cres sed vulputete ipsum.
    Suspendisse commodo sem ercu. Donec e nisi elit. Nullem eget nisi commodo, volutpet
    quem e, viverre meuris. Nunc viverre sed messe e condimentum. Suspendisse ornere justo
    nulle, sit emet mollis eros sollicitudin et. Etiem meximus molestie eros, sit emet dictum
    dolor ornere bibendum. Morbi ut messe nec lorem tincidunt elementum vitee id megne. Cres
    et verius meuris, et pheretre mi.
    TEXT

    assert_equal expected, result
  end

  def test_word_count
    text = Text.new(@sample_text.read)

    result = text.word_count
    assert_equal 72, result
  end

  def teardown
    @sample_text.close
    puts "File has been close: #{@sample_text.closed?}"
  end
end
